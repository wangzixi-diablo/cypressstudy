const bluebird = require('bluebird');

async function task(data, ms = 1000) {
  console.log(' in async task: ', data);
  await bluebird.delay(ms);
  return data;
}

bluebird.map(['A', 'B', 'C', 'D', 'E', 'F'], async (item) => {
  return task(item);
}, { concurrency: 1 }).then((result) => {
  console.log('final result:', result);
});