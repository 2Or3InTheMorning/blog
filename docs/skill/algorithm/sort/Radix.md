# 基数排序（不稳定）

时间复杂度：O(nlog(r)m)，其中r为所采取的基数，m为堆数

思想：按照个位先排序，然后收集；再按照高位排序，然后再收集；以此类推，直到最高位。
