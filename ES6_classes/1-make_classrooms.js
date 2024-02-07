/**
 * function that initialize a instance from the class ClassRoom
 * @class1 instance with a value of 19
 * @class2 instance with a value of 20
 * @class3 instance with a value of 34
 * @return a list with the 3 instances of ClassRoom
 */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);

  return [class1, class2, class3];
}
