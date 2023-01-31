
//Todo lo de acá es para saber qué tasks tienen trabajador.
export let workWithTask = 0;
let exist = new Set();

export const thereIs = (vlr) => {
        return exist.has(vlr)
    }

export const whatWorkers = (array) => {
    array.forEach((element) => {
      exist.add(element.id_task);
    });
    
    if(thereIs(3) || thereIs(4) || thereIs(5) || thereIs(6)){
        exist.add(3)
        exist.add(4)
        exist.add(5)
        exist.add(6)
    }
    else if(thereIs(11)||thereIs(12)||thereIs(13)){
        exist.add(11)
        exist.add(12)
        exist.add(13)
    }
    workWithTask = exist;
  };