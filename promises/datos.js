
      const jsonData = require ('./datos.json');
      function datos(id) {
          return new Promise(
              function (resolve, reject) {

                  if (id) {
                      setTimeout(() => {
                          resolve();
                      }, 4000);
                  }
                  else{
                      reject();
                  }
              }
          )
      }
      function persona1(jsonData) {
        for (const key in jsonData[0]) {
            console.log(`${key}: ${jsonData[0][key]}`);
        }
    }
    function persona1(jsonData) {
        for (const key in jsonData[1]) {
            console.log(`${key}: ${jsonData[1][key]}`);
        }
    }
    function p1(){
        console.log(`
       Esta persona si existe en la base de datos y trabaja en la compañia Gotitas de amor`);
    }
    function p2(){
        console.log(`
       Esta persona existe en la base de datos pero ya no trabaja en la compañia Gotitas de amor`);
    }
    async function consulta() {
        try {
            await datos(false)
            await p1()
        } catch (error) {
            await p2()
        }
    }
    consulta()
    persona1(jsonData)