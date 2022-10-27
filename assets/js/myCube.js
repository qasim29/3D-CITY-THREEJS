class myCube {
    constructor(col) {
        
        this.material = new THREE.MeshBasicMaterial({color : col});
        this.geometry = new THREE.Geometry();
   

        // vertices
        this.geometry.vertices.push(
            new THREE.Vector3(-1, -1, 1), // 0
            new THREE.Vector3(1, -1, 1), //  1
            new THREE.Vector3(-1, 1, 1), //  2
            new THREE.Vector3(1, 1, 1),  //  3
            new THREE.Vector3(-1, -1, -1),// 4
            new THREE.Vector3(1, -1, -1), // 5
            new THREE.Vector3(-1, 1, -1), // 6
            new THREE.Vector3(1, 1, -1), //  
        );
        
        // faces

        this.geometry.faces.push(
            // front
            new THREE.Face3(0, 1, 3),
            new THREE.Face3(0, 3, 2),

            // right
            new THREE.Face3(1, 5, 7),
            new THREE.Face3(1, 7, 3),


            //back
            new THREE.Face3(6, 7, 5),
            new THREE.Face3(6, 5, 4),

            //left
            new THREE.Face3(4, 0, 2),
            new THREE.Face3(4, 2, 6),

            //top
            new THREE.Face3(2, 3, 7),
            new THREE.Face3(2, 7, 6),


            // bottom
            new THREE.Face3(4, 5, 1),
            new THREE.Face3(4, 1, 0),

        );
         
        
        // Wireframe = new THREE.WireframeGeometry(geometry);
        



        // this.drawCube()


    }

    getCube() {
        
        return new THREE.Mesh(this.geometry, this.material);
    }


    drawHouse(){

        let houseGroup = new THREE.Group();
        cube = new myCube("red").drawCube();
    }
} 