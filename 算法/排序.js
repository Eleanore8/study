// 冒泡排序:
// 一次比较两个元素，如果顺序是错误的就把它们交换过来。
// 走访数列的工作会重复地进行，直到不需要再交换。
function bubbleSort(array) {
    const len = array.length
    if (len < 2) return array
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[i]) {
                const temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}

/*===================================================================================================================================== */

// 快速排序：
// 通过一趟排序，将待排记录分隔成独立的两部分，
// 其中一部分记录的关键字均比另一部分的关键字小，
// 则可以分别对这两部分记录继续进行排序，以达到整个序列有序。
function quickSort(array) {
    var quick = function(arr) {
        if (arr.length <= 1) return arr
        const index = Math.floor(arr.length / 2)
        const pivot = arr.splice(index, 1)[0]
        const left = []
        const right = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > pivot) {
                right.push(arr[i])
            } else if (arr[i] <= pivot) {
                left.push(arr[i])
            }
        }
        return quick(left).concat([pivot], quick(right))
    }
    const result = quick(array)
    return result
}

/*===================================================================================================================================== */

// 插入排序
// 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
function insertSort(array) {
    const len = array.length
    let current
    let prev
    for (let i = 1; i < len; i++) {
        current = array[i]
        prev = i - 1
        while (prev >= 0 && array[prev] > current) {
            array[prev + 1] = array[prev]
            prev--
        }
        array[prev + 1] = current
    }
    return array
}

/*===================================================================================================================================== */

// 选择排序
// 首先将最小的元素存放在序列的起始位置，再从剩余未排序元素中继续寻找最小元素，然后放到已排序的序列后面……
// 以此类推，直到所有元素均排序完毕。
function selectSort(array) {
    const len = array.length
    let temp
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (array[j] <= array[minIndex]) {
                minIndex = j
            }
        }
        temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}

/*===================================================================================================================================== */

// 堆排序
// 1、排序前先建堆
// 2、由于堆其实就是完全二叉树，如果父节点的序号为 n，那么叶子节点的序号就分别是 2n 和 2n+1。
// 两个排序：
// 第一个是处理父节点的顺序；
// 第二个是根据父节点和叶子节点的大小对比，进行堆的调整
function heap_sort(arr) {
    var len = arr.length
    var k = 0
    function swap(i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    function max_heapify(start, end) {
        var dad = start
        var son = dad * 2 + 1
        if (son >= end) return
        if (son + 1 < end && arr[son] < arr[son + 1]) {
            son++
        }
        if (arr[dad] <= arr[son]) {
            swap(dad, son)
            max_heapify(son, end)
        }
    }
    
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
        max_heapify(i, len)
    }
    
    for (var j = len - 1; j > k; j--) {
        swap(0, j)
        max_heapify(0, j)
    }
    return arr
}

/*===================================================================================================================================== */

// 归并排序：是采用分治法的一个非常典型的应用
// 将已有序的子序列合并，得到完全有序的序列；先使每个子序列有序，再使子序列段间有序。
// 若将两个有序表合并成一个有序表，称为二路归并。
function mergeSort(array) {
    const merge = (right, left) => {
        const result = []
        let il = 0
        let ir = 0
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }
        while (il < left.length) {
            result.push(left[il++])
        }
        while (ir < right.length) {
            result.push(right[ir++])
        }
        return result
    }
    const mergeSort = array => {
        if (array.length === 1) { return array }
        const mid = Math.floor(array.length / 2)
        const left = array.slice(0, mid)
        const right = array.slice(mid, array.length)
        return merge(mergeSort(left), mergeSort(right))
    }
    return mergeSort(array)
}
