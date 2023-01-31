export let listWorkers = [];

export const addIdWorkers = (response) => {
  listWorkers = [];
  if (Array.isArray(response)) {
    response.forEach((element) => {
      const values = {
        id_worker: element.id_worker,
        id_task: element.id_task,
        price: element.price,
      };
      listWorkers.push(values);
    });
  }
};
