// 2000. Reverse Prefix of Word
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

// Constraints:
// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.

const reverseString = (word, ch) => {
    let index = -1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            index = i;
            break
        }
    }

    if (index === -1) return word;

    let result = '';

    for (let i = index; i >= 0; i--) {
        result += word[i];
    }

    for (let i = index + 1; i < word.length; i++) {
        result += word[i]
    }
}





// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

var strStr = function (haystack, needle) {
    if (needle === "") return 0;  // If needle is an empty string, return 0 (by definition)

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let matchFound = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                matchFound = false;
                break;
            }
        }

        if (matchFound) {
            return i;  // Return the index of the first match
        }
    }

    return -1;
};


