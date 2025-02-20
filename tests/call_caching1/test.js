// @flow

const Immutable = require('immutable');

const tasksPerStatusMap = new Map(
  ([]: Array<string>).map(taskStatus => [taskStatus, new Map<string, string>()]),
);
for (let [taskStatus, tasksMap] of tasksPerStatusMap) {
  tasksPerStatusMap.set(taskStatus, Immutable.Map(tasksMap));
}
