const cluster = require('cluster');
const os = require('os');

let cpus = os.cpus();

if(cluster.isMaster){

	cpus.forEach(function(){
		cluster.fork();
	});

	cluster.on('listening', worker =>{
		console.log('cluster connected ' + worker.process.pid);
	});

	cluster.on("disconnect", worker => {
        console.log("cluster %d desconnected", worker.process.pid);
      });

	cluster.on("exit", worker =>  {
        console.log("cluster %d lost", worker.process.pid);
        cluster.fork();
    });

}else{
	require('./server.js');
}
