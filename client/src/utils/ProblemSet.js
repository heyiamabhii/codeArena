const ProblemSet = [
  {
    problemID: 1,
    problem: "TwoSum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "Easy",
    tags: ["Array", "Hash Table"],
    constraints: {
      c1: "An array of integers (0 <= nums.length <= 10^5, -10^9 <= nums[i] <= 10^9)",
      c2: "An integer (-10^9 <= target <= 10^9)"
    },
    expectedValue: "An array of two integers representing the indices of the two numbers.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    template: {
      cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
      java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
      js: "class Solution {\n  // Method to find two indices such that nums[i] + nums[j] == target\n  twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n      const complement = target - nums[i];\n      if (map.has(complement)) {\n        return [map.get(complement), i];\n      }\n      map.set(nums[i], i);\n    }\n    return []; // Return empty if no solution found\n  }\n}\n\n// Example usage:\n// const sol = new Solution();\n// console.log(sol.twoSum([2,7,11,15], 9)); // Output: [0, 1]\n",
      python: "class Solution:\n    def twoSum(self, nums, target):\n        \"\"\"\n        :type nums: List[int]\n        :type target: int\n        :rtype: List[int]\n        \"\"\"\n        hashmap = {}\n        for i, num in enumerate(nums):\n            complement = target - num\n            if complement in hashmap:\n                return [hashmap[complement], i]\n            hashmap[num] = i\n        return []\n\n# Example usage:\n# sol = Solution()\n# print(sol.twoSum([2,7,11,15], 9))  # Output: [0, 1]\n"
    },
    solution: {
      cpp: "#include<iostream>\n#include<vector>\n#include<unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> hash_map;\n    vector<int> result;\n\n    for (int i = 0; i < nums.size(); ++i) {\n        int complement = target - nums[i];\n        if (hash_map.find(complement) != hash_map.end()) {\n            result.push_back(hash_map[complement]);\n            result.push_back(i);\n            return result;\n        }\n        hash_map[nums[i]] = i;\n    }\n\n    return result;\n}",
      java: "import java.util.HashMap;\n\nclass TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        HashMap<Integer, Integer> map = new HashMap<>();\n\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[]{map.get(complement), i};\n            }\n            map.put(nums[i], i);\n        }\n\n        return new int[]{};\n    }\n}",
      js: "function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}\n\n// Example usage:\n// console.log(twoSum([2,7,11,15], 9)); // Output: [0, 1]\n",
      python: "def twoSum(nums, target):\n    hashmap = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in hashmap:\n            return [hashmap[complement], i]\n        hashmap[num] = i\n    return []\n\n# Example usage:\n# print(twoSum([2,7,11,15], 9))  # Output: [0, 1]\n"
    },
    demo: [
      {
        input: "Input : [2, 7, 11, 15]",
        output: "[0 , 1]"
      },
      {
        input: "Input : [3, 2, 4]",
        output: "[1, 2]"
      },
      {
        input: "Input : [3, 3]",
        output: "[0, 1]"
      }
    ]
  }
  ,

 {
  problemID: 2,
  problem: "Add Two Numbers",
  description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
  difficulty: "Medium",
  tags: ["Linked List", "Math"],
  constraints: {
    c1: "A linked list representing a non-negative integer.",
    c2: "A linked list representing a non-negative integer."
  },
  expectedValue: "A new linked list representing the sum of the two numbers.",
  timeComplexity: "O(max(m, n)), where m and n are the lengths of the two linked lists.",
  spaceComplexity: "O(max(m, n))",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function ListNode(val, next = null) {\n    this.val = val;\n    this.next = next;\n}\n\nfunction addTwoNumbers(l1, l2) {\n    let dummy = new ListNode(0);\n    let current = dummy;\n    let carry = 0;\n\n    while (l1 !== null || l2 !== null || carry !== 0) {\n        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;\n        carry = Math.floor(sum / 10);\n\n        current.next = new ListNode(sum % 10);\n        current = current.next;\n\n        if (l1) l1 = l1.next;\n        if (l2) l2 = l2.next;\n    }\n\n    return dummy.next;\n}\n",
    python: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef addTwoNumbers(l1, l2):\n    dummy = ListNode(0)\n    current = dummy\n    carry = 0\n\n    while l1 or l2 or carry:\n        val1 = l1.val if l1 else 0\n        val2 = l2.val if l2 else 0\n        total = val1 + val2 + carry\n        carry = total // 10\n\n        current.next = ListNode(total % 10)\n        current = current.next\n\n        if l1:\n            l1 = l1.next\n        if l2:\n            l2 = l2.next\n\n    return dummy.next\n"
  },
  solution: {
    cpp: "#include<iostream>\nusing namespace std;\n\n// Definition for singly-linked list.\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0);\n    ListNode* current = &dummy;\n    int carry = 0;\n\n    while (l1 || l2 || carry) {\n        int sum = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + carry;\n        carry = sum / 10;\n        \n        current->next = new ListNode(sum % 10);\n        current = current->next;\n\n        if (l1) l1 = l1->next;\n        if (l2) l2 = l2->next;\n    }\n\n    return dummy.next;\n}",
    java: "class ListNode {\n    int val;\n    ListNode next;\n\n    ListNode(int x) {\n        val = x;\n    }\n}\n\npublic class AddTwoNumbers {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0);\n        ListNode current = dummy;\n        int carry = 0;\n\n        while (l1 != null || l2 != null || carry != 0) {\n            int sum = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;\n            carry = sum / 10;\n\n            current.next = new ListNode(sum % 10);\n            current = current.next;\n\n            if (l1 != null) l1 = l1.next;\n            if (l2 != null) l2 = l2.next;\n        }\n\n        return dummy.next;\n    }\n}",
    js: "function ListNode(val, next = null) {\n    this.val = val;\n    this.next = next;\n}\n\nfunction addTwoNumbers(l1, l2) {\n    let dummy = new ListNode(0);\n    let current = dummy;\n    let carry = 0;\n\n    while (l1 !== null || l2 !== null || carry !== 0) {\n        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;\n        carry = Math.floor(sum / 10);\n\n        current.next = new ListNode(sum % 10);\n        current = current.next;\n\n        if (l1) l1 = l1.next;\n        if (l2) l2 = l2.next;\n    }\n\n    return dummy.next;\n}\n",
    python: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef addTwoNumbers(l1, l2):\n    dummy = ListNode(0)\n    current = dummy\n    carry = 0\n\n    while l1 or l2 or carry:\n        val1 = l1.val if l1 else 0\n        val2 = l2.val if l2 else 0\n        total = val1 + val2 + carry\n        carry = total // 10\n\n        current.next = ListNode(total % 10)\n        current = current.next\n\n        if l1:\n            l1 = l1.next\n        if l2:\n            l2 = l2.next\n\n    return dummy.next\n"
  },
  demo: [
    {
      input: "Input : {2 -> 4 -> 3}, {5 -> 6 -> 4}",
      output: "{7 -> 0 -> 8}"
    },
    {
      input: "Input : {5}, {5}",
      output: "{0 -> 1}"
    },
    {
      input: "Input : {1 -> 8}, {0}",
      output: "{1 -> 8}"
    }
  ]
},

{
  problemID: 3,
  problem: "Longest Substring Without Repeating Characters",
  description: "Given a string s, find the length of the longest substring without repeating characters.",
  difficulty: "Medium",
  tags: ["Hash Table", "String"],
  constraints: {
    c1: "Input Input : ring (0 <= s.length <= 5 * 10^4)"
  },
  expectedValue: "An integer representing the length of the longest substring without repeating characters.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(min(m, n)), where m is the size of the character set.",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function lengthOfLongestSubstring(s) {\n    const charSet = new Set();\n    let left = 0, right = 0, maxLength = 0;\n\n    while (right < s.length) {\n        if (!charSet.has(s[right])) {\n            charSet.add(s[right]);\n            maxLength = Math.max(maxLength, right - left + 1);\n            right++;\n        } else {\n            charSet.delete(s[left]);\n            left++;\n        }\n    }\n\n    return maxLength;\n}\n",
    python: "def lengthOfLongestSubstring(s: str) -> int:\n    char_set = set()\n    left = 0\n    max_length = 0\n\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_length = max(max_length, right - left + 1)\n\n    return max_length\n"
  },
  solution: {
    cpp: "#include<iostream>\n#include<unordered_set>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    unordered_set<char> charSet;\n    int maxLength = 0, left = 0, right = 0;\n\n    while (right < s.length()) {\n        if (charSet.find(s[right]) == charSet.end()) {\n            charSet.insert(s[right]);\n            maxLength = max(maxLength, right - left + 1);\n            right++;\n        } else {\n            charSet.erase(s[left]);\n            left++;\n        }\n    }\n\n    return maxLength;\n}",
    java: "import java.util.HashSet;\n\npublic class LongestSubstringWithoutRepeatingCharacters {\n    public int lengthOfLongestSubstring(String s) {\n        HashSet<Character> charSet = new HashSet<>();\n        int maxLength = 0, left = 0, right = 0;\n\n        while (right < s.length()) {\n            if (!charSet.contains(s.charAt(right))) {\n                charSet.add(s.charAt(right));\n                maxLength = Math.max(maxLength, right - left + 1);\n                right++;\n            } else {\n                charSet.remove(s.charAt(left));\n                left++;\n            }\n        }\n\n        return maxLength;\n    }\n}",
    js: "function lengthOfLongestSubstring(s) {\n    const charSet = new Set();\n    let left = 0, right = 0, maxLength = 0;\n\n    while (right < s.length) {\n        if (!charSet.has(s[right])) {\n            charSet.add(s[right]);\n            maxLength = Math.max(maxLength, right - left + 1);\n            right++;\n        } else {\n            charSet.delete(s[left]);\n            left++;\n        }\n    }\n\n    return maxLength;\n}\n",
    python: "def lengthOfLongestSubstring(s: str) -> int:\n    char_set = set()\n    left = 0\n    max_length = 0\n\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_length = max(max_length, right - left + 1)\n\n    return max_length\n"
  },
  demo: [
    {
      input: "Input : abcabcbb",
      output: "3"
    },
    {
      input: "Input : bbbbb",
      output: "1"
    },
    {
      input: "Input : pwwkew",
      output: "3"
    }
  ]
},

{
  problemID: 4,
  problem: "Median Of Two Sorted Arrays",
  description: "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays.",
  difficulty: "Hard",
  tags: ["Array", "Binary Search"],
  constraints: {
    c1: "Sorted array (0 <= nums1.length <= 1000)",
    c2: "Sorted array (0 <= nums2.length <= 1000)"
  },
  expectedValue: "A double representing the median of the two sorted arrays.",
  timeComplexity: "O(log(min(m, n))), where m and n are the lengths of the two arrays.",
  spaceComplexity: "O(1)",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function findMedianSortedArrays(nums1, nums2) {\n    if (nums1.length > nums2.length) {\n        [nums1, nums2] = [nums2, nums1];\n    }\n\n    const m = nums1.length;\n    const n = nums2.length;\n    let left = 0, right = m;\n\n    while (left <= right) {\n        const partitionX = Math.floor((left + right) / 2);\n        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;\n\n        const maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];\n        const maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];\n\n        const minX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];\n        const minY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];\n\n        if (maxX <= minY && maxY <= minX) {\n            if ((m + n) % 2 === 0) {\n                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;\n            } else {\n                return Math.max(maxX, maxY);\n            }\n        } else if (maxX > minY) {\n            right = partitionX - 1;\n        } else {\n            left = partitionX + 1;\n        }\n    }\n\n    throw new Error(\"Input arrays are not sorted!\");\n}\n",
    python: "def findMedianSortedArrays(nums1, nums2):\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n\n    m, n = len(nums1), len(nums2)\n    left, right = 0, m\n\n    while left <= right:\n        partitionX = (left + right) // 2\n        partitionY = (m + n + 1) // 2 - partitionX\n\n        maxX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]\n        maxY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]\n\n        minX = float('inf') if partitionX == m else nums1[partitionX]\n        minY = float('inf') if partitionY == n else nums2[partitionY]\n\n        if maxX <= minY and maxY <= minX:\n            if (m + n) % 2 == 0:\n                return (max(maxX, maxY) + min(minX, minY)) / 2\n            else:\n                return max(maxX, maxY)\n        elif maxX > minY:\n            right = partitionX - 1\n        else:\n            left = partitionX + 1\n\n    raise ValueError(\"Input arrays are not sorted!\")\n"
  },
  solution: {
    cpp: "#include<iostream>\n#include<vector>\nusing namespace std;\n\ndouble findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n    if (nums1.size() > nums2.size()) {\n        swap(nums1, nums2);\n    }\n\n    int m = nums1.size();\n    int n = nums2.size();\n    int left = 0, right = m;\n    int partitionX, partitionY, maxX, maxY;\n\n    while (left <= right) {\n        partitionX = (left + right) / 2;\n        partitionY = (m + n + 1) / 2 - partitionX;\n\n        maxX = (partitionX == 0) ? INT_MIN : nums1[partitionX - 1];\n        maxY = (partitionY == 0) ? INT_MIN : nums2[partitionY - 1];\n\n        int minX = (partitionX == m) ? INT_MAX : nums1[partitionX];\n        int minY = (partitionY == n) ? INT_MAX : nums2[partitionY];\n\n        if (maxX <= minY && maxY <= minX) {\n            if ((m + n) % 2 == 0) {\n                return (double)(max(maxX, maxY) + min(minX, minY)) / 2;\n            } else {\n                return max(maxX, maxY);\n            }\n        } else if (maxX > minY) {\n            right = partitionX - 1;\n        } else {\n            left = partitionX + 1;\n        }\n    }\n\n    throw invalid_argument(\"Input arrays are not sorted!\");\n}",
    java: "public class MedianOfTwoSortedArrays {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) {\n            int[] temp = nums1;\n            nums1 = nums2;\n            nums2 = temp;\n        }\n\n        int m = nums1.length;\n        int n = nums2.length;\n        int left = 0, right = m;\n        int partitionX, partitionY, maxX, maxY;\n\n        while (left <= right) {\n            partitionX = (left + right) / 2;\n            partitionY = (m + n + 1) / 2 - partitionX;\n\n            maxX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];\n            maxY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];\n\n            int minX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];\n            int minY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];\n\n            if (maxX <= minY && maxY <= minX) {\n                if ((m + n) % 2 == 0) {\n                    return (double) (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;\n                } else {\n                    return Math.max(maxX, maxY);\n                }\n            } else if (maxX > minY) {\n                right = partitionX - 1;\n            } else {\n                left = partitionX + 1;\n            }\n        }\n\n        throw new IllegalArgumentException(\"Input arrays are not sorted!\");\n    }\n}",
    js: "function findMedianSortedArrays(nums1, nums2) {\n    if (nums1.length > nums2.length) {\n        [nums1, nums2] = [nums2, nums1];\n    }\n\n    const m = nums1.length;\n    const n = nums2.length;\n    let left = 0, right = m;\n\n    while (left <= right) {\n        const partitionX = Math.floor((left + right) / 2);\n        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;\n\n        const maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];\n        const maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];\n\n        const minX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];\n        const minY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];\n\n        if (maxX <= minY && maxY <= minX) {\n            if ((m + n) % 2 === 0) {\n                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;\n            } else {\n                return Math.max(maxX, maxY);\n            }\n        } else if (maxX > minY) {\n            right = partitionX - 1;\n        } else {\n            left = partitionX + 1;\n        }\n    }\n\n    throw new Error(\"Input arrays are not sorted!\");\n}\n",
    python: "def findMedianSortedArrays(nums1, nums2):\n    if len(nums1) > len(nums2):\n        nums1, nums2 = nums2, nums1\n\n    m, n = len(nums1), len(nums2)\n    left, right = 0, m\n\n    while left <= right:\n        partitionX = (left + right) // 2\n        partitionY = (m + n + 1) // 2 - partitionX\n\n        maxX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]\n        maxY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]\n\n        minX = float('inf') if partitionX == m else nums1[partitionX]\n        minY = float('inf') if partitionY == n else nums2[partitionY]\n\n        if maxX <= minY and maxY <= minX:\n            if (m + n) % 2 == 0:\n                return (max(maxX, maxY) + min(minX, minY)) / 2\n            else:\n                return max(maxX, maxY)\n        elif maxX > minY:\n            right = partitionX - 1\n        else:\n            left = partitionX + 1\n\n    raise ValueError(\"Input arrays are not sorted!\")\n"
  },
  demo: [
    {
      input: "Input : [1, 3], [2]",
      output: "2.0"
    },
    {
      input: "Input : [1, 2], [3, 4]",
      output: "2.5"
    },
    {
      input: "Input : [0, 0], [0, 0]",
      output: "0.0"
    }
  ]
},

{
  problemID: 5,
  problem: "Longest Palindromic Substring",
  description: "Given a string s, return the longest palindromic substring in s.",
  difficulty: "Medium",
  tags: ["String", "DynamicProgramming"],
  constraints: {
    c1: "Input Input : ring (1 <= s.length <= 1000)"
  },
  expectedValue: "A string representing the longest palindromic substring.",
  timeComplexity: "O(n^2)",
  spaceComplexity: "O(n^2)",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function longestPalindrome(s) {\n    const n = s.length;\n    const dp = Array.from(Array(n), () => Array(n).fill(false));\n    let start = 0, maxLength = 1;\n\n    for (let i = 0; i < n; i++) {\n        dp[i][i] = true;\n    }\n\n    for (let len = 2; len <= n; len++) {\n        for (let i = 0; i <= n - len; i++) {\n            let j = i + len - 1;\n\n            if (len === 2 && s[i] === s[j]) {\n                dp[i][j] = true;\n                start = i;\n                maxLength = len;\n            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {\n                dp[i][j] = true;\n                start = i;\n                maxLength = len;\n            }\n        }\n    }\n\n    return s.substring(start, start + maxLength);\n}\n",
    python: "def longestPalindrome(s: str) -> str:\n    n = len(s)\n    dp = [[False] * n for _ in range(n)]\n    start, maxLength = 0, 1\n\n    for i in range(n):\n        dp[i][i] = True\n\n    for length in range(2, n + 1):\n        for i in range(n - length + 1):\n            j = i + length - 1\n            if length == 2 and s[i] == s[j]:\n                dp[i][j] = True\n                start = i\n                maxLength = length\n            elif s[i] == s[j] and dp[i + 1][j - 1]:\n                dp[i][j] = True\n                start = i\n                maxLength = length\n\n    return s[start:start + maxLength]\n"
  },
  solution: {
    cpp: "#include<iostream>\n#include<vector>\nusing namespace std;\n\nstring longestPalindrome(string s) {\n    int n = s.length();\n    vector<vector<bool>> dp(n, vector<bool>(n, false));\n    int start = 0, maxLength = 1;\n\n    for (int i = 0; i < n; ++i) {\n        dp[i][i] = true;\n    }\n\n    for (int len = 2; len <= n; ++len) {\n        for (int i = 0; i <= n - len; ++i) {\n            int j = i + len - 1;\n\n            if (len == 2 && s[i] == s[j]) {\n                dp[i][j] = true;\n                start = i;\n                maxLength = len;\n            } else if (s[i] == s[j] && dp[i + 1][j - 1]) {\n                dp[i][j] = true;\n                start = i;\n                maxLength = len;\n            }\n        }\n    }\n\n    return s.substr(start, maxLength);\n}",
    java: "public class LongestPalindromicSubstring {\n    public String longestPalindrome(String s) {\n        int n = s.length();\n        boolean[][] dp = new boolean[n][n];\n        int start = 0, maxLength = 1;\n\n        for (int i = 0; i < n; ++i) {\n            dp[i][i] = true;\n        }\n\n        for (int len = 2; len <= n; ++len) {\n            for (int i = 0; i <= n - len; ++i) {\n                int j = i + len - 1;\n\n                if (len == 2 && s.charAt(i) == s.charAt(j)) {\n                    dp[i][j] = true;\n                    start = i;\n                    maxLength = len;\n                } else if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {\n                    dp[i][j] = true;\n                    start = i;\n                    maxLength = len;\n                }\n            }\n        }\n\n        return s.substring(start, start + maxLength);\n    }\n}",
    js: "function longestPalindrome(s) {\n    const n = s.length;\n    const dp = Array.from(Array(n), () => Array(n).fill(false));\n    let start = 0, maxLength = 1;\n\n    for (let i = 0; i < n; i++) {\n        dp[i][i] = true;\n    }\n\n    for (let len = 2; len <= n; len++) {\n        for (let i = 0; i <= n - len; i++) {\n            let j = i + len - 1;\n\n            if (len === 2 && s[i] === s[j]) {\n                dp[i][j] = true;\n                start = i;\n                maxLength = len;\n            } else if (s[i] === s[j] && dp[i + 1][j - 1]) {\n                dp[i][j] = true;\n                start = i;\n                maxLength = len;\n            }\n        }\n    }\n\n    return s.substring(start, start + maxLength);\n}\n",
    python: "def longestPalindrome(s: str) -> str:\n    n = len(s)\n    dp = [[False] * n for _ in range(n)]\n    start, maxLength = 0, 1\n\n    for i in range(n):\n        dp[i][i] = True\n\n    for length in range(2, n + 1):\n        for i in range(n - length + 1):\n            j = i + length - 1\n            if length == 2 and s[i] == s[j]:\n                dp[i][j] = True\n                start = i\n                maxLength = length\n            elif s[i] == s[j] and dp[i + 1][j - 1]:\n                dp[i][j] = True\n                start = i\n                maxLength = length\n\n    return s[start:start + maxLength]\n"
  },
  demo: [
    {
      input: "Input : babad",
      output: "bab"
    },
    {
      input: "Input : cbbd",
      output: "bb"
    },
    {
      input: "Input : a",
      output: "a"
    }
  ]
},

{
  problemID: 6,
  problem: "ZigZag Conversion",
  description: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this.",
  difficulty: "Medium",
  tags: ["String"],
  constraints: {
    c1: "Input Input : ring (1 <= s.length <= 1000)",
    c2: "Number of rows (1 <= numRows <= 1000)"
  },
  expectedValue: "A string representing the zigzag conversion of the input Input : ring.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function convert(s, numRows) {\n    if (numRows === 1 || numRows >= s.length) {\n        return s;\n    }\n\n    const rows = Array.from({ length: numRows }, () => '');\n    let currentRow = 0;\n    let goingDown = false;\n\n    for (const c of s) {\n        rows[currentRow] += c;\n        if (currentRow === 0 || currentRow === numRows - 1) {\n            goingDown = !goingDown;\n        }\n        currentRow += goingDown ? 1 : -1;\n    }\n\n    return rows.join('');\n}\n",
    python: "def convert(s: str, numRows: int) -> str:\n    if numRows == 1 or numRows >= len(s):\n        return s\n\n    rows = [''] * numRows\n    rows = [\"\" for _ in range(numRows)]\n    currentRow = 0\n    goingDown = False\n\n    for c in s:\n        rows[currentRow] += c\n        if currentRow == 0 or currentRow == numRows - 1:\n            goingDown = not goingDown\n        currentRow += 1 if goingDown else -1\n\n    return ''.join(rows)\n"
  },
  solution: {
    cpp: "#include<iostream>\n#include<vector>\nusing namespace std;\n\nstring convert(string s, int numRows) {\n    if (numRows == 1 || numRows >= s.length()) {\n        return s;\n    }\n\n    vector<string> rows(numRows, \"\");\n    int currentRow = 0;\n    bool goingDown = false;\n\n    for (char c : s) {\n        rows[currentRow] += c;\n        if (currentRow == 0 || currentRow == numRows - 1) {\n            goingDown = !goingDown;\n        }\n        currentRow += goingDown ? 1 : -1;\n    }\n\n    string result = \"\";\n    for (string row : rows) {\n        result += row;\n    }\n\n    return result;\n}",
    java: "public class ZigZagConversion {\n    public String convert(String s, int numRows) {\n        if (numRows == 1 || numRows >= s.length()) {\n            return s;\n        }\n\n        StringBuilder[] rows = new StringBuilder[numRows];\n        for (int i = 0; i < numRows; i++) {\n            rows[i] = new StringBuilder();\n        }\n\n        int currentRow = 0;\n        boolean goingDown = false;\n\n        for (char c : s.toCharArray()) {\n            rows[currentRow].append(c);\n            if (currentRow == 0 || currentRow == numRows - 1) {\n                goingDown = !goingDown;\n            }\n            currentRow += goingDown ? 1 : -1;\n        }\n\n        StringBuilder result = new StringBuilder();\n        for (StringBuilder row : rows) {\n            result.append(row);\n        }\n\n        return result.toString();\n    }\n}",
    js: "function convert(s, numRows) {\n    if (numRows === 1 || numRows >= s.length) {\n        return s;\n    }\n\n    const rows = Array.from({ length: numRows }, () => '');\n    let currentRow = 0;\n    let goingDown = false;\n\n    for (const c of s) {\n        rows[currentRow] += c;\n        if (currentRow === 0 || currentRow === numRows - 1) {\n            goingDown = !goingDown;\n        }\n        currentRow += goingDown ? 1 : -1;\n    }\n\n    return rows.join('');\n}\n",
    python: "def convert(s: str, numRows: int) -> str:\n    if numRows == 1 or numRows >= len(s):\n        return s\n\n    rows = [\"\" for _ in range(numRows)]\n    currentRow = 0\n    goingDown = False\n\n    for c in s:\n        rows[currentRow] += c\n        if currentRow == 0 or currentRow == numRows - 1:\n            goingDown = not goingDown\n        currentRow += 1 if goingDown else -1\n\n    return ''.join(rows)\n"
  },
  demo: [
    {
      input: "Input : PAYPALISHIRING, 3",
      output: "PAHNAPLSIIGYIR"
    },
    {
      input: "Input : PAYPALISHIRING, 4",
      output: "PINALSIGYAHRPI"
    },
    {
      input: "Input : AB, 1",
      output: "AB"
    }
  ]
},

{
  problemID: 7,
  problem: "Reverse Integer",
  description: "Given a signed 32-bit integer x, return x with its digits reversed.",
  difficulty: "Easy",
  tags: ["Math"],
  constraints: {
    c1: "A signed 32-bit integer (-2^31 <= x <= 2^31 - 1)"
  },
  expectedValue: "A signed 32-bit integer with reversed digits.",
  timeComplexity: "O(log(x))",
  spaceComplexity: "O(1)",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function reverse(x) {\n    let result = 0;\n    let num = x;\n\n    while (num !== 0) {\n        const pop = num % 10;\n        num = (num / 10) | 0; // truncate towards zero\n        result = result * 10 + pop;\n    }\n\n    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {\n        return 0;\n    }\n\n    return result;\n}\n",
    python: "def reverse(x: int) -> int:\n    result = 0\n    num = x\n\n    while num != 0:\n        pop = num % 10 if num > 0 else num % -10\n        num = int(num / 10)\n        result = result * 10 + pop\n\n    if result < -2**31 or result > 2**31 - 1:\n        return 0\n\n    return result\n"
  },
  solution: {
    cpp: "#include<iostream>\nusing namespace std;\n\nint reverse(int x) {\n    long result = 0;\n\n    while (x != 0) {\n        result = result * 10 + x % 10;\n        x /= 10;\n    }\n\n    if (result < INT_MIN || result > INT_MAX) {\n        return 0;\n    }\n\n    return static_cast<int>(result);\n}",
    java: "public class ReverseInteger {\n    public int reverse(int x) {\n        long result = 0;\n\n        while (x != 0) {\n            result = result * 10 + x % 10;\n            x /= 10;\n        }\n\n        if (result < Integer.MIN_VALUE || result > Integer.MAX_VALUE) {\n            return 0;\n        }\n\n        return (int) result;\n    }\n}",
    js: "function reverse(x) {\n    let result = 0;\n    let num = x;\n\n    while (num !== 0) {\n        const pop = num % 10;\n        num = (num / 10) | 0; // truncate towards zero\n        result = result * 10 + pop;\n    }\n\n    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {\n        return 0;\n    }\n\n    return result;\n}\n",
    python: "def reverse(x: int) -> int:\n    result = 0\n    num = x\n\n    while num != 0:\n        pop = num % 10 if num > 0 else num % -10\n        num = int(num / 10)\n        result = result * 10 + pop\n\n    if result < -2**31 or result > 2**31 - 1:\n        return 0\n\n    return result\n"
  },
  demo: [
    {
      input: 23,
      output: 32
    },
    {
      input: -123,
      output: -321
    },
    {
      input: 20,
      output: 2
    }
  ]
},

{
  problemID: 8,
  problem: "String To Integer (atoi)",
  description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
  difficulty: "Medium",
  tags: ["String"],
  constraints: {
    c1: "Input Input : ring (0 <= s.length <= 200)"
  },
  expectedValue: "A 32-bit signed integer converted from the input Input : ring.",
  timeComplexity: "O(n)",
  spaceComplexity: "O(1)",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function myAtoi(s) {\n    let i = 0;\n    const n = s.length;\n    while (i < n && s[i] === ' ') i++;\n    if (i === n) return 0;\n\n    let sign = 1;\n    if (s[i] === '+' || s[i] === '-') {\n        sign = s[i] === '-' ? -1 : 1;\n        i++;\n    }\n\n    let result = 0;\n    while (i < n && s[i] >= '0' && s[i] <= '9') {\n        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);\n        result = result * 10 + digit;\n        if (result * sign < -2147483648) return -2147483648;\n        if (result * sign > 2147483647) return 2147483647;\n        i++;\n    }\n\n    return result * sign;\n}\n",
    python: "def myAtoi(s: str) -> int:\n    i = 0\n    n = len(s)\n    while i < n and s[i] == ' ':\n        i += 1\n    if i == n:\n        return 0\n\n    sign = 1\n    if s[i] == '+' or s[i] == '-':\n        sign = -1 if s[i] == '-' else 1\n        i += 1\n\n    result = 0\n    INT_MAX = 2**31 - 1\n    INT_MIN = -2**31\n\n    while i < n and s[i].isdigit():\n        result = result * 10 + int(s[i])\n        if result * sign < INT_MIN:\n            return INT_MIN\n        if result * sign > INT_MAX:\n            return INT_MAX\n        i += 1\n\n    return result * sign\n"
  },
  solution: {
    cpp: "#include<iostream>\nusing namespace std;\n\nint myAtoi(string s) {\n    int i = 0;\n    while (i < s.length() && s[i] == ' ') {\n        i++;\n    }\n\n    if (i == s.length()) {\n        return 0;\n    }\n\n    int sign = 1;\n    if (s[i] == '+' || s[i] == '-') {\n        sign = (s[i++] == '-') ? -1 : 1;\n    }\n\n    long result = 0;\n    while (i < s.length() && isdigit(s[i])) {\n        result = result * 10 + (s[i++] - '0');\n        if (result * sign < INT_MIN) {\n            return INT_MIN;\n        } else if (result * sign > INT_MAX) {\n            return INT_MAX;\n        }\n    }\n\n    return static_cast<int>(result * sign);\n}",
    java: "public class StringToInteger {\n    public int myAtoi(String s) {\n        int i = 0;\n        while (i < s.length() && s.charAt(i) == ' ') {\n            i++;\n        }\n\n        if (i == s.length()) {\n            return 0;\n        }\n\n        int sign = 1;\n        if (s.charAt(i) == '+' || s.charAt(i) == '-') {\n            sign = (s.charAt(i++) == '-') ? -1 : 1;\n        }\n\n        long result = 0;\n        while (i < s.length() && Character.isDigit(s.charAt(i))) {\n            result = result * 10 + (s.charAt(i++) - '0');\n            if (result * sign < Integer.MIN_VALUE) {\n                return Integer.MIN_VALUE;\n            } else if (result * sign > Integer.MAX_VALUE) {\n                return Integer.MAX_VALUE;\n            }\n        }\n\n        return (int) (result * sign);\n    }\n}",
    js: "function myAtoi(s) {\n    let i = 0;\n    const n = s.length;\n    while (i < n && s[i] === ' ') i++;\n    if (i === n) return 0;\n\n    let sign = 1;\n    if (s[i] === '+' || s[i] === '-') {\n        sign = s[i] === '-' ? -1 : 1;\n        i++;\n    }\n\n    let result = 0;\n    while (i < n && s[i] >= '0' && s[i] <= '9') {\n        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);\n        result = result * 10 + digit;\n        if (result * sign < -2147483648) return -2147483648;\n        if (result * sign > 2147483647) return 2147483647;\n        i++;\n    }\n\n    return result * sign;\n}\n",
    python: "def myAtoi(s: str) -> int:\n    i = 0\n    n = len(s)\n    while i < n and s[i] == ' ':\n        i += 1\n    if i == n:\n        return 0\n\n    sign = 1\n    if s[i] == '+' or s[i] == '-':\n        sign = -1 if s[i] == '-' else 1\n        i += 1\n\n    result = 0\n    INT_MAX = 2**31 - 1\n    INT_MIN = -2**31\n\n    while i < n and s[i].isdigit():\n        result = result * 10 + int(s[i])\n        if result * sign < INT_MIN:\n            return INT_MIN\n        if result * sign > INT_MAX:\n            return INT_MAX\n        i += 1\n\n    return result * sign\n"
  },
  demo: [
    {
      input: "Input : 42",
      output: 42
    },
    {
      input: "Input :    -42",
      output: -42
    },
    {
      input: "Input : 4193 with words",
      output: 4193
    }
  ]
},

{
  problemID: 9,
  problem: "Regular Expression Matching",
  description: "Implement regular expression matching with support for '.' and '*'.",
  difficulty: "Hard",
  tags: ["String", "Backtracking"],
  constraints: {
    c1: "Input Input : ring (0 <= s.length <= 20)",
    c2: "Input Input : ttern (0 <= p.length <= 30)"
  },
  expectedValue: "A boolean indicating whether the input Input : ring matches the pattern.",
  timeComplexity: "O(sp), where s and p are the lengths of the input Input : ring and pattern, respectively.",
  spaceComplexity: "O(sp)",
  template: {
    cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n        \n    // you code here\n        \n    return 0;\n}\n",
    java: "import java.util.*;\n\npublic class DSAExample {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}\n",
    js: "function isMatch(s, p) {\n    // your code here\n}\n",
    python: "def isMatch(s: str, p: str) -> bool:\n    # your code here\n    pass\n"
  },
  solution: {
    cpp: "#include<iostream>\n#include<vector>\nusing namespace std;\n\nbool isMatch(string s, string p) {\n    int m = s.length();\n    int n = p.length();\n    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));\n    dp[0][0] = true;\n\n    for (int j = 1; j <= n; ++j) {\n        if (p[j - 1] == '*') {\n            dp[0][j] = dp[0][j - 2];\n        }\n    }\n\n    for (int i = 1; i <= m; ++i) {\n        for (int j = 1; j <= n; ++j) {\n            if (p[j - 1] == s[i - 1] || p[j - 1] == '.') {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else if (p[j - 1] == '*') {\n                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] == p[j - 2] || p[j - 2] == '.'));\n            }\n        }\n    }\n\n    return dp[m][n];\n}",
    java: "public class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        int m = s.length();\n        int n = p.length();\n        boolean[][] dp = new boolean[m + 1][n + 1];\n        dp[0][0] = true;\n\n        for (int j = 1; j <= n; ++j) {\n            if (p.charAt(j - 1) == '*') {\n                dp[0][j] = dp[0][j - 2];\n            }\n        }\n\n        for (int i = 1; i <= m; ++i) {\n            for (int j = 1; j <= n; ++j) {\n                if (p.charAt(j - 1) == s.charAt(i - 1) || p.charAt(j - 1) == '.') {\n                    dp[i][j] = dp[i - 1][j - 1];\n                } else if (p.charAt(j - 1) == '*') {\n                    dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == '.'));\n                }\n            }\n        }\n\n        return dp[m][n];\n    }\n}",
    js: "function isMatch(s, p) {\n    const m = s.length, n = p.length;\n    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));\n    dp[0][0] = true;\n\n    for (let j = 1; j <= n; ++j) {\n        if (p[j - 1] === '*') {\n            dp[0][j] = dp[0][j - 2];\n        }\n    }\n\n    for (let i = 1; i <= m; ++i) {\n        for (let j = 1; j <= n; ++j) {\n            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else if (p[j - 1] === '*') {\n                dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));\n            }\n        }\n    }\n    return dp[m][n];\n}\n",
    python: "def isMatch(s: str, p: str) -> bool:\n    m, n = len(s), len(p)\n    dp = [[False] * (n + 1) for _ in range(m + 1)]\n    dp[0][0] = True\n\n    for j in range(1, n + 1):\n        if p[j - 1] == '*':\n            dp[0][j] = dp[0][j - 2]\n\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if p[j - 1] == s[i - 1] or p[j - 1] == '.':\n                dp[i][j] = dp[i - 1][j - 1]\n            elif p[j - 1] == '*':\n                dp[i][j] = dp[i][j - 2] or (dp[i - 1][j] and (s[i - 1] == p[j - 2] or p[j - 2] == '.'))\n    return dp[m][n]\n"
  },
  demo: [
    {
      input: "Input : aa, a*",
      output: true
    },
    {
      input: "Input : mississippi, mis*is*p*.",
      output: false
    },
    {
      input: "Input : ab, .*",
      output: true
    }
  ]
},


];
  



export default ProblemSet;
