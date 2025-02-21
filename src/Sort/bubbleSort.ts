/**
 * 冒泡排序
 * @description 冒泡排序是一种通过多次比较和交换相邻元素，将最大元素逐步“冒泡”到末尾的排序算法。
 * @param {number[]} nums
 * @returns {number[]}
 */
function bubbleSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let flag = false
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        flag = true
      }
    }
    if (!flag) return nums
  }
  return nums
}
console.log(bubbleSort([5, 3, 8, 1, 4, 2, 6, 9, 7]))
