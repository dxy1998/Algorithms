/**
 * 二分查找
 * @description 通过每次查找的区间缩小一半来进行查找
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function binarySearch(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
