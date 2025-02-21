/**
 * 插入排序
 * @description 将未排序元素逐个插入已排序序列合适位置，将第一个视为已排序数组，后面的元素依次从后向前比较然后插入
 * @param nums
 * @returns
 */
function insertionSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i],
      j = i - 1
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = temp
  }
  return nums
}
console.log(insertionSort([5, 3, 8, 1, 4, 2, 6, 9, 7]))
