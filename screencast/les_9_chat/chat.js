var clients = [];

exports.subscribe = function(req, res, id) {

    clients.push({
        "id": id,
        "res": res
    });
    console.log('subscribe ' + id);


    res.on('close', function() {
        clients.map(function(client) {
            if (client.res === res) {
                console.log('close ' + id);
                return false;
            }

            return true;
        });
    });

    res.on('close', function() {
       clients.splice(clients.indexOf(res), 1);
    });
};

exports.publish = function(message) {
    console.log("publish '%s'", message);

    clients.forEach(function(client) {
        client.res.end(message);
    });

    clients = [];
};

// setInterval(function() {
//     console.log(clients.length);
// }, 1000);