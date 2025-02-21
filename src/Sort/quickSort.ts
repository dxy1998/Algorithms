/**
 * 递归快速排序
 * @description 采用分而治之策略，将一个大数组分为两个小数组，选择一个基准值，小于基准值的数放在左边，大于基准值的数放在右边
 * @param nums
 * @returns
 */
function quickSortRecursive(nums: number[]): number[] {
  if (nums.length <= 1) return nums
  let l: number[] = [],
    r: number[] = [],
    pivot = nums.pop()!,
    center = [pivot]
  while (nums.length) {
    let current = nums.shift()!
    if (current > pivot) {
      r.push(current)
    } else {
      l.push(current)
    }
  }
  let lSorted = quickSortRecursive(l)
  let rSorted = quickSortRecursive(r)
  return lSorted.concat(center, rSorted)
}
console.log(quickSortRecursive([5, 3, 8, 1, 4, 2, 6, 9, 7, 5, 9]))
/**
 * 原地快速排序
 * @description 不借助额外空间进行快速排序的算法
 * @param nums
 * @param left
 * @param right
 * @returns
 */
function quickSortInPlace(nums: number[], left = 0, right = nums.length - 1) {
  if (left < right) {
    let pivotIndex: number = partition(nums, left, right)
    quickSortInPlace(nums, left, pivotIndex - 1)
    quickSortInPlace(nums, pivotIndex + 1, right)
  }
  function partition(arr: number[], left, right) {
    let pivot = arr[right],
      i = left
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        i++
      }
    }
    ;[arr[i], arr[right]] = [arr[right], arr[i]]
    return i
  }
}
let arr = [5, 3, 8, 1, 4, 2, 6, 9, 7, 5, 9]
quickSortInPlace(arr)
console.log(arr)
