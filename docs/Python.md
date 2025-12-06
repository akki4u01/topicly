---
id: Python
title: Python Related Questions
---

import Quiz from '@site/src/components/Quiz';

<Quiz 
  questions={[
    {
      questionText: 'What is a List in Python?',
      options: ['Mutable sequence', 'Immutable sequence', 'Key-Value pair', 'Unordered set'],
      answer: 'Mutable sequence',
    },
    {
      questionText: 'Which bracket is used for Dictionaries?',
      options: ['{}', '[]', '()', '<>'],
      answer: '{}',
    },
    {
      questionText: 'Is a Tuple mutable or immutable?',
      options: ['Immutable', 'Mutable', 'Depends on content', 'Both'],
      answer: 'Immutable',
    },
    {
      questionText: 'What is the "GIL"?',
      options: ['Global Interpreter Lock', 'General Interface Loop', 'Global Interval Log', 'Graphic Interface Layer'],
      answer: 'Global Interpreter Lock',
    },
    {
      questionText: 'What does PEP 8 define?',
      options: ['Python style guide', 'Performance standards', 'Package indexing', 'Parallel execution'],
      answer: 'Python style guide',
    }
  ]}
/>

<br/>

# Python
This is Python contents

# Python

- **Fundamentals:** Master Python basics:
- Variables, data types, loops, conditionals, functions, and classes.
- Variable - A **variable** is like a container that stores data which you can use later in your code.
    
    ### ✅ 1. **Variables**
    
    **What is it?**
    
    A variable is a name that refers to a value stored in memory. It lets you store and reuse data.
    
    **Example:** 
    
    ```python
    x = 5
    name = "Akash"
    ```
    
    **Explanation:**
    
    - `x` is a variable that stores the number 5.
    - `name` is a variable that stores a string `"Akash"`.
    
    **Interview Tip:** Python is dynamically typed, so you don't declare types. The type is decided at runtime.
    
    ### **Variable Naming Rules**
    
    - Must start with a letter or `_`
    - Can contain letters, numbers, and underscores
    - Case-sensitive (`Name` and `name` are different)
    - Cannot use Python keywords (like `for`, `if`, `True`)
    
    ✅ Valid: `my_name`, `name1`, `_temp`
    
    ❌ Invalid: `1name`, `my-name`, `for`
    
    ### **String Interpolation / Formatting**
    
    Combine variables with strings using f-strings.
    
    ```python
    name = "Akash"
    age = 30
    print(f"My name is {name} and I am {age} years old.")
    
    ```
    
    ### **Global vs Local Variables**
    
    - **Local Variable**: Declared inside a function; accessible only inside.
    - **Global Variable**: Declared outside all functions; accessible everywhere. —
    - 
    
    ```python
    x = 100  # Global
    
    def func():
        x = 50  # Local to func
        print(x)
    
    func()        # Output: 50
    print(x)      # Output: 100
    
    ```
    
    You can use the `global` keyword to modify a global variable inside a function: 
    
    ```python
    x = 10
    
    def change():
        global x
        x = 20
    
    change()
    print(x)  # Output: 20
    
    ```
    
    | Operation | Example |
    | --- | --- |
    | Assign | `x = 10` |
    | Reassign | `x = 20` |
    | Multiple Assignments | `a, b = 1, 2` |
    | Swap | `a, b = b, a` |
    | Check Type | `type(x)` |
    | Delete Variable | `del x` |
    | String Format | `f\"Hello, {name}\"` |
    | Global Variable Use | `global x` |
    
- Data Types - A **data type** is a classification or category that tells you what kind of value a piece of data represents. It defines the operations that can be performed on that data and how it's stored in memory.
    
    Common Data Types:
    
    | Category | Type | Example | Mutable? |  |
    | --- | --- | --- | --- | --- |
    | Numeric | `int` | `42` | No | Whole numbers, positive or negative, without decimals. |
    |  | `float` | `3.14` | No | Numbers with decimals. |
    |  | `complex` | `2 + 3j` | No | Numbers with a real and imaginary part. |
    | Text | `str` | `"hello"` | No | A sequence of characters (letters, digits, symbols, etc.) |
    | Sequence | `list` | `[1, 2, 3]` | Yes | Ordered, mutable (changeable), allows duplicates. |
    |  | `tuple` | `(1, 2, 3)` | No | Ordered, **immutable** (unchangeable), allows duplicates. |
    |  | `range` | `range(5)` | No | Immutable sequence of numbers, often used in loops. |
    | Mapping | `dict` | `{'key': 'value'}` | Yes | Key-value pairs. Keys must be unique and immutable. |
    | Set | `set` | `{1, 2, 3}` | Yes | Unordered, mutable, **no duplicates**. |
    |  | `frozenset` | `frozenset([1, 2, 3])` | No | Like `set` but immutable. |
    | Boolean | `bool` | `True`, `False` | No | Represents truth values. |
    | NoneType | `None` | `None` | No | Represents the absence of a value. |
    
    **String Operation** 
    
    ```python
    # Concatenation
    first = "Hello"
    last = "World"
    print(first + " " + last)  # Hello World
    
    # Accessing characters
    print(name[0])    # A
    
    # Slicing
    print(name[1:4])  # kas
    
    # Length
    print(len(name))  # 5
    
    # Methods
    print(name.upper())  # AKASH
    print(name.lower())  # akash
    
    ```
    
    **Example:** 
    
    ```python
    num = 10        # int
    price = 99.99   # float
    is_valid = True # bool
    items = ["apple", "banana"]  # list
    ```
    
    Summary table in **list**
    
    | **Category** | **Method / Syntax** | **Description** | **Example** |
    | --- | --- | --- | --- |
    | **Creation** | `[]`, `list()` | Create a new list | `a = [1, 2, 3]`, `b = list(range(5))` |
    | **Access** | `list[index]` | Get item at specific position (0-based) | `a[0]` → `1` |
    |  | `list[-1]` | Access last element | `a[-1]` → `3` |
    |  | `list[start:end]` | Slice the list | `a[1:3]` → `[2, 3]` |
    | **Update** | `list[index] = value` | Change item at specific index | `a[0] = 100` |
    | **Add Items** | `append(item)` | Add item to end | `a.append(4)` → `[1, 2, 3, 4]` |
    |  | `insert(index, item)` | Insert at index | `a.insert(1, "x")` → `[1, "x", 2, 3]` |
    |  | `extend(iterable)` | Add elements from another list or iterable | `a.extend([5, 6])` → `[1, 2, 3, 5, 6]` |
    | **Remove Items** | `remove(item)` | Remove first occurrence of item | `a.remove(2)` |
    |  | `pop([index])` | Remove and return item (last if no index) | `a.pop()` → `3`, `a.pop(0)` → removes first element |
    |  | `clear()` | Remove all items | `a.clear()` → `[]` |
    | **Search/Info** | `len(list)` | Get number of items | `len(a)` → `3` |
    |  | `count(item)` | Count occurrences of item | `a.count(2)` → `1` |
    |  | `index(item)` | Get first index of item | `a.index(3)` → `2` |
    | **Sort/Reverse** | `sort()` | Sort the list in place (ascending) | `a.sort()` |
    |  | `sort(reverse=True)` | Sort in descending order | `a.sort(reverse=True)` |
    |  | `reverse()` | Reverse the list in place | `a.reverse()` |
    |  | `sorted(list)` | Return a sorted copy | `b = sorted(a)` |
    |  | `reversed(list)` | Return reversed iterator | `list(reversed(a))` |
    | **Copying** | `copy()` | Shallow copy | `b = a.copy()` |
    |  | `list(b)` | Alternate way to copy | `b = list(a)` |
    |  | `[:]` | Slice to copy entire list | `b = a[:]` |
    | **Combine/Join** | `+` | Concatenate two lists | `a + b` |
    |  | `*` | Repeat list elements | `a * 2` → `[1, 2, 3, 1, 2, 3]` |
    | **Check Existence** | `in`, `not in` | Test if item is in list | `"apple" in a` |
    | **Iteration** | `for x in list:` | Loop through items | `for i in a: print(i)` |
    |  | `enumerate(list)` | Get index and value in loop | `for i, v in enumerate(a)` |
    | **Comprehension** | `[expr for item in list]` | Compact syntax for building new list | `[x*2 for x in a]` |
    |  | `[x for x in a if x > 2]` | With condition | `[x for x in a if x > 2]` |
    | **Nested Lists** | `list[index][sub_index]` | Access elements in nested list | `matrix[1][2]` |
    | **Unpacking** | `a, b, c = list` | Assign each item to a variable | `x, y, z = [1, 2, 3]` |
    | **Type Conversion** | `list(string/tuple/set)` | Convert to list | `list("abc")` → `['a', 'b', 'c']` |
    | **List vs Reference** | `list1 = list2` | Both refer to same list (changes affect both) | Change in `list1` affects `list2` |
    
    **Dict Summary**
    
    | **Category** | **Method / Syntax** | **Description** | **Example** |
    | --- | --- | --- | --- |
    | **Creation** | `dict()` or `{}` | Create an empty dictionary | `d = {}` or `d = dict()` |
    |  | `{key: value}` | Create a dictionary with values | `{"a": 1, "b": 2}` |
    | **Access** | `dict[key]` | Access value for a key (throws error if key not found) | `person["name"]` → `"Akash"` |
    |  | `dict.get(key, default)` | Access with fallback (no error if key not found) | `person.get("gender", "N/A")` → `"N/A"` |
    | **Update/Add** | `dict[key] = value` | Add new or update existing key-value pair | `person["age"] = 31` |
    |  | `update({key: value})` | Add/update multiple keys | `person.update({"city": "London"})` |
    | **Remove** | `pop(key)` | Remove key and return value (KeyError if not found) | `person.pop("age")` |
    |  | `popitem()` | Removes and returns last inserted key-value pair (Python 3.7+) | `person.popitem()` |
    |  | `del dict[key]` | Delete a specific key | `del person["name"]` |
    |  | `clear()` | Remove all items | `person.clear()` |
    | **Check Existence** | `key in dict` | Check if key exists | `"name" in person` → `True` |
    |  | `key not in dict` | Check if key doesn't exist | `"salary" not in person` → `True` |
    | **Iteration** | `for k in dict:` | Loop through keys | `for key in person:` |
    |  | `items()` | Get key-value pairs | `for k, v in person.items():` |
    |  | `keys()` | Get all keys | `for k in person.keys():` |
    |  | `values()` | Get all values | `for v in person.values():` |
    | **Copying** | `copy()` | Shallow copy | `d2 = person.copy()` |
    |  | `dict(d)` | Alternate shallow copy | `d2 = dict(person)` |
    | **Default Set/Add** | `setdefault(key, default)` | Return value if key exists, else set to default | `person.setdefault("gender", "Male")` |
    | **Merge** | ` | ` (Python 3.9+) | Merge two dictionaries |
    |  | `dict.update()` | Add/overwrite from another dict | `d1.update(d2)` |
    | **Dictionary Comprehension** | `{k: v for ...}` | Create dictionary using loops/conditions | `{x: x**2 for x in range(5)}` |
    | **Nested Dictionary** | `dict[key][subkey]` | Access or assign in nested dict | `data["emp"]["name"]` |
    | **Length** | `len(dict)` | Number of key-value pairs | `len(person)` → `3` |
    | **Delete All** | `clear()` | Removes all items | `person.clear()` |
    | **Unpack** | `**dict` | Use dictionary to unpack arguments | `func(**params)` |
    
    **Tuple summary:** 
    A **tuple** is an **immutable**, ordered collection of items. Once created, you **cannot modify** its element
    
    | **Category** | **Method / Syntax** | **Description** | **Example** |
    | --- | --- | --- | --- |
    | **Creation** | `(item1, item2, ...)` | Create a tuple | `t = (1, 2, 3)` |
    |  | `tuple(iterable)` | Convert iterable to tuple | `tuple([1,2,3])` → `(1, 2, 3)` |
    |  | `(item,)` | Single-item tuple (note trailing comma!) | `(5,)` |
    | **Access** | `tuple[index]` | Access item at index (0-based) | `t[0]` → `1` |
    |  | `tuple[start:end]` | Slice tuple | `t[1:3]` → `(2, 3)` |
    | **Immutability** | *No methods to change items* | Cannot add, remove or modify elements | `t[0] = 5` → Error |
    | **Length** | `len(tuple)` | Number of items | `len(t)` → `3` |
    | **Concatenate** | `+` | Combine two tuples | `(1,2) + (3,4)` → `(1, 2, 3, 4)` |
    | **Repeat** | `*` | Repeat tuple elements | `(1, 2) * 3` → `(1, 2, 1, 2, 1, 2)` |
    | **Unpack** | `a, b = tuple` | Assign items to variables | `x, y = (1, 2)` |
    | **Count** | `tuple.count(value)` | Count occurrences of value | `(1,2,2,3).count(2)` → `2` |
    | **Index** | `tuple.index(value)` | Find first index of value | `(1,2,3).index(2)` → `1` |
    | **Membership** | `in` / `not in` | Check if value exists | `2 in t` → `True` |
    | **Iteration** | `for item in tuple:` | Loop through items | `for i in t: print(i)` |
    | **Nested Tuples** | `tuple[index][sub_index]` | Access nested elements | `((1,2), (3,4))[1][0]` → `3` |
    
    **Set Summary:** 
    A **set** is an **unordered**, **mutable** collection of **unique elements** (no duplicates).
    
    | **Category** | **Method / Syntax** | **Description** | **Example** |
    | --- | --- | --- | --- |
    | **Creation** | `set()` or `{}` | Create an empty set (use `set()` because `{}` creates empty dict) | `s = set()` |
    |  | `{item1, item2, ...}` | Create set with elements | `s = {1, 2, 3}` |
    |  | `set(iterable)` | Convert iterable to set | `set([1, 2, 2, 3])` → `{1, 2, 3}` |
    | **Add/Remove Elements** | `add(item)` | Add a single item | `s.add(4)` |
    |  | `update(iterable)` | Add multiple items | `s.update([5, 6])` |
    |  | `remove(item)` | Remove item, error if not found | `s.remove(2)` |
    |  | `discard(item)` | Remove item, no error if missing | `s.discard(10)` |
    |  | `pop()` | Remove and return a random item | `s.pop()` |
    |  | `clear()` | Remove all items | `s.clear()` |
    | **Set Operations** | `union(other_set)` or ` | ` | Union of two sets (all unique elements) |
    |  | `intersection(other_set)` or `&` | Intersection (common elements) | `s & {2, 3}` |
    |  | `difference(other_set)` or `-` | Items in s but not in other set | `s - {2}` |
    |  | `symmetric_difference(other_set)` or `^` | Items in either set but not both | `s ^ {1, 4}` |
    | **Check Membership** | `in` / `not in` | Check if element exists | `3 in s` |
    | **Length** | `len(set)` | Number of elements | `len(s)` |
    | **Iteration** | `for item in set:` | Loop through items | `for i in s: print(i)` |
    | **Frozen Set** | `frozenset(iterable)` | Immutable version of set | `fs = frozenset([1, 2, 3])` |
    
- Loops
    
    **What is it?**
    
    Loops let you repeat actions multiple times.
    
    ### 🔁 `for` Loop
    
    Used to iterate over a sequence (like a list, range, or string).
    
    ```python
    python
    CopyEdit
    for i in range(3):
        print(i)
    
    ```
    
    📌 Output:
    
    ```
    CopyEdit
    0
    1
    2
    
    ```
    
    ### 🔁 `while` Loop
    
    Runs **while** a condition is true.
    
    ```python
    python
    CopyEdit
    x = 0
    while x < 3:
        print(x)
        x += 1
    
    ```
    
    Python provides two main types of loops:
    
    - `for` loop – iterates over sequences (like lists, strings, ranges, etc.)
    - `while` loop – continues as long as a condition is `True`
    
    We'll also cover:
    
    - `break`, `continue`, and `else` with loops
    - Nested loops
    - Loop comprehensions (for lists, sets, dicts)
    
    ---
    
    ## 1️⃣ `for` Loop
    
    ### ✅ Definition:
    
    The `for` loop is used to iterate over a **sequence** (like list, tuple, set, string, range, etc.).
    
    ### 🔹 Syntax:
    
    ```python
    python
    CopyEdit
    for variable in iterable:
        # block of code
    
    ```
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    fruits = ['apple', 'banana', 'cherry']
    for fruit in fruits:
        print(fruit)
    
    ```
    
    ### 🔹 Use Cases:
    
    - Loop through lists, strings, tuples
    - Loop through a dictionary using `.items()`
    - Use `range()` to loop fixed number of times
    
    ### 🔹 With `range()`:
    
    ```python
    python
    CopyEdit
    for i in range(3):  # i = 0, 1, 2
        print(i)
    
    ```
    
    ---
    
    ## 2️⃣ `while` Loop
    
    ### ✅ Definition:
    
    The `while` loop keeps executing **as long as a condition is true**.
    
    ### 🔹 Syntax:
    
    ```python
    python
    CopyEdit
    while condition:
        # block of code
    
    ```
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    i = 0
    while i < 3:
        print(i)
        i += 1
    
    ```
    
    ---
    
    ## 3️⃣ `break`, `continue`, and `else`
    
    | **Keyword** | **Usage** | **Example** |
    | --- | --- | --- |
    | `break` | Exit the loop immediately | `if x == 3: break` |
    | `continue` | Skip current iteration and go to next | `if x == 3: continue` |
    | `else` | Runs after loop ends normally (no break) | See example below |
    
    ### 🔹 Example with `break` and `else`:
    
    ```python
    python
    CopyEdit
    for i in range(5):
        if i == 3:
            break
        print(i)
    else:
        print("Loop completed!")  # This won't run due to break
    
    ```
    
    ---
    
    ## 4️⃣ Nested Loops
    
    ### ✅ Definition:
    
    A loop inside another loop.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    for i in range(3):
        for j in range(2):
            print(f"i={i}, j={j}")
    
    ```
    
    ### 🔹 Use Case:
    
    Used in 2D arrays, matrix traversal, combinations, etc.
    
    ---
    
    ## 5️⃣ Looping through Different Data Types
    
    | **Data Type** | **Example** |
    | --- | --- |
    | List | `for x in [1,2,3]: print(x)` |
    | Tuple | `for x in (1,2,3): print(x)` |
    | String | `for ch in "abc": print(ch)` |
    | Dictionary | `for k, v in d.items(): print(k, v)` |
    | Set | `for item in {1,2,3}: print(item)` |
    
    ---
    
    ## 6️⃣ List Comprehension (Loop Inside Expression)
    
    ### ✅ Definition:
    
    A shorter way to create a list using a `for` loop.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    squares = [x * x for x in range(5)]  # [0, 1, 4, 9, 16]
    
    ```
    
    ### 🔹 With condition:
    
    ```python
    python
    CopyEdit
    even_squares = [x*x for x in range(10) if x % 2 == 0]
    
    ```
    
    ---
    
    ## 7️⃣ Loop with `enumerate()`
    
    ### ✅ Definition:
    
    Returns both the index and the value while looping.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    fruits = ["apple", "banana"]
    for idx, fruit in enumerate(fruits):
        print(idx, fruit)
    
    ```
    
    ---
    
    ## 8️⃣ Loop with `zip()`
    
    ### ✅ Definition:
    
    Allows looping over two (or more) iterables in parallel.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    names = ['Alice', 'Bob']
    scores = [85, 92]
    
    for name, score in zip(names, scores):
        print(name, score)
    
    ```
    
    ---
    
    ## ✅ Interview Focus Points
    
    | **Topic** | **What They Might Ask** |
    | --- | --- |
    | `for` vs `while` | When to use each |
    | Loop logic | Looping over lists/dicts with conditions |
    | Performance | Nested loops and complexity |
    | Comprehensions | Can you convert a loop to list comprehension? |
    | Real-world logic | Problems like FizzBuzz, matrix flattening, etc. |
- Conditionals
    
    **What is it?**
    
    Conditionals let you **make decisions** in your code.
    
    **Syntax:**
    
    ```python
    python
    CopyEdit
    if condition:
        # do something
    elif another_condition:
        # do something else
    else:
        # default action
    
    ```
    
    **Example:**
    
    ```python
    python
    CopyEdit
    age = 18
    if age >= 18:
        print("You can vote")
    else:
        print("You cannot vote")
    
    ```
    
    **Conditionals in Python**, which are used to control the flow of code based on conditions — a critical topic for coding interviews, including at Meta.
    
    ---
    
    # 🔀 Python Conditionals – Deep Dive
    
    Conditionals help your program make decisions. Python uses `if`, `elif`, and `else` statements to handle these logic branches.
    
    ---
    
    ## 🧠 1. Basic `if` Statement
    
    ### ✅ Syntax:
    
    ```python
    python
    CopyEdit
    if condition:
        # code block
    
    ```
    
    ### 🧪 Example:
    
    ```python
    python
    CopyEdit
    x = 10
    if x > 5:
        print("x is greater than 5")
    
    ```
    
    ---
    
    ## 🧠 2. `if-else` Statement
    
    ### ✅ Syntax:
    
    ```python
    python
    CopyEdit
    if condition:
        # code block if True
    else:
        # code block if False
    
    ```
    
    ### 🧪 Example:
    
    ```python
    python
    CopyEdit
    x = 3
    if x % 2 == 0:
        print("Even")
    else:
        print("Odd")
    
    ```
    
    ---
    
    ## 🧠 3. `if-elif-else` Ladder
    
    Use `elif` (else if) for multiple conditions.
    
    ### ✅ Syntax:
    
    ```python
    python
    CopyEdit
    if condition1:
        # block 1
    elif condition2:
        # block 2
    else:
        # block 3
    
    ```
    
    ### 🧪 Example:
    
    ```python
    python
    CopyEdit
    score = 85
    if score >= 90:
        print("A")
    elif score >= 80:
        print("B")
    else:
        print("C")
    
    ```
    
    ---
    
    ## 🧠 4. Comparison Operators
    
    | Operator | Description | Example |
    | --- | --- | --- |
    | `==` | Equal to | `x == 5` |
    | `!=` | Not equal to | `x != 5` |
    | `>` | Greater than | `x > 3` |
    | `<` | Less than | `x < 10` |
    | `>=` | Greater than or equal | `x >= 5` |
    | `<=` | Less than or equal | `x <= 7` |
    
    ---
    
    ## 🧠 5. Logical Operators
    
    | Operator | Description | Example |
    | --- | --- | --- |
    | `and` | True if both conditions are true | `x > 0 and x < 10` |
    | `or` | True if at least one is true | `x < 0 or x > 100` |
    | `not` | Reverses the boolean value | `not (x > 10)` |
    
    ---
    
    ## 🧠 6. Nested Conditionals
    
    You can use an `if` block inside another.
    
    ```python
    python
    CopyEdit
    x = 15
    if x > 10:
        if x < 20:
            print("x is between 10 and 20")
    
    ```
    
    ---
    
    ## 🧠 7. Short-Hand / Ternary Conditional Expression
    
    ### ✅ Syntax:
    
    ```python
    python
    CopyEdit
    value_if_true if condition else value_if_false
    
    ```
    
    ### 🧪 Example:
    
    ```python
    python
    CopyEdit
    age = 20
    status = "Adult" if age >= 18 else "Minor"
    
    ```
    
    ---
    
    ## 🧠 8. `pass` Statement (Placeholder)
    
    Use when a statement is required syntactically but you don’t want to execute anything.
    
    ```python
    python
    CopyEdit
    x = 10
    if x > 5:
        pass  # to be implemented later
    
    ```
    
    ---
    
    ## ✅ Common Interview Questions on Conditionals
    
    | Question | Concept Tested |
    | --- | --- |
    | Write a program to find if a number is even or odd | Basic if-else |
    | Check if a year is a leap year | Multiple conditions |
    | Classify a grade into A/B/C using if-elif-else | Conditional ladder |
    | Use a one-liner to find the maximum of two numbers | Ternary operator |
    | Validate if a string is a palindrome using logic | Nested & combined logic |
    
    ---
    
    ## 🔁 Real-World Example
    
    ```python
    python
    CopyEdit
    username = input("Enter username: ")
    if username:
        if len(username) > 5:
            print("Valid username")
        else:
            print("Too short")
    else:
        print("Username cannot be empty")
    
    ```
    
    ---
    
    ## 🔚 Summary Table
    
    | **Component** | **Description** |
    | --- | --- |
    | `if` | Executes block if condition is `True` |
    | `else` | Executes block if all previous conditions are `False` |
    | `elif` | Else-if; checks another condition |
    | Comparison Ops | `==`, `!=`, `>`, `<`, `>=`, `<=` |
    | Logical Ops | `and`, `or`, `not` |
    | Nested Conditionals | `if` inside `if` |
    | Ternary Expression | `a if condition else b` |
    | `pass` | Placeholder for future code |
- Functions
    
    **What is it?**
    
    A function is a **block of code** that performs a specific task and can be reused.
    
    **Define a Function:**
    
    ```python
    python
    CopyEdit
    def greet(name):
        return f"Hello, {name}"
    
    ```
    
    **Call a Function:**
    
    ```python
    python
    CopyEdit
    print(greet("Akash"))  # Output: Hello, Akash

---


    
    ```
    
    **Why Functions?**
    
    - Avoid code repetition
    - Make code modular and organized
    
    **Functions in Python** — one of the most important building blocks in coding and heavily tested in interviews, including at Meta.
    
    ---
    
    # 🧠 Python Functions – Deep Dive
    
    A **function** is a reusable block of code that performs a specific task. It helps in **code reuse, modularity, and clarity**.
    
    ---
    
    ## 📌 1. What is a Function?
    
    - A **function** allows you to group a set of statements and give it a name.
    - You can run this group of statements anywhere by **calling the function**.
    
    ---
    
    ## ✅ 2. Defining a Function
    
    ### 🔹 Syntax:
    
    ```python
    python
    CopyEdit
    def function_name(parameters):
        # code block
        return result
    
    ```
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    def greet(name):
        return f"Hello, {name}!"
    
    ```
    
    ---
    
    ## 🧪 3. Calling a Function
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    message = greet("Alice")
    print(message)  # Output: Hello, Alice!
    
    ```
    
    ---
    
    ## 🔁 4. Function Parameters & Arguments
    
    | **Term** | **Explanation** |
    | --- | --- |
    | **Parameter** | A variable in the function definition (`name` in `def f(name):`) |
    | **Argument** | Actual value passed when calling the function (`"Alice"` here) |
    
    ---
    
    ## ⚙️ 5. Return Statement
    
    - `return` sends the result back to the caller.
    - Without `return`, the function returns `None`.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    def add(a, b):
        return a + b
    
    ```
    
    ---
    
    ## 🧵 6. Types of Function Arguments
    
    | **Type** | **Example** |
    | --- | --- |
    | Positional | `add(2, 3)` |
    | Keyword | `add(b=3, a=2)` |
    | Default | `def f(x=10): print(x)` |
    | Variable Positional | `def f(*args):` (tuple of args) |
    | Variable Keyword | `def f(**kwargs):` (dict of key-value args) |
    
    ---
    
    ## 🔀 7. Function with Default Parameters
    
    ```python
    python
    CopyEdit
    def greet(name="Guest"):
        print(f"Hello, {name}!")
    
    ```
    
    ---
    
    ## 🔢 8. Variable-Length Arguments
    
    ### 🔹 `args`: for any number of positional arguments
    
    ```python
    python
    CopyEdit
    def total(*numbers):
        return sum(numbers)
    
    ```
    
    ### 🔹 `*kwargs`: for any number of keyword arguments
    
    ```python
    python
    CopyEdit
    def show_info(**details):
        for k, v in details.items():
            print(f"{k}: {v}")
    
    ```
    
    ---
    
    ## 🔁 9. Lambda Functions (Anonymous Functions)
    
    - Used for **small one-liner functions**, often with `map`, `filter`, etc.
    
    ```python
    python
    CopyEdit
    square = lambda x: x * x
    print(square(5))  # Output: 25
    
    ```
    
    ---
    
    ## 📚 10. Docstring (Documentation)
    
    Describe what the function does.
    
    ```python
    python
    CopyEdit
    def add(a, b):
        """Returns the sum of a and b"""
        return a + b
    
    ```
    
    Access docstring with:
    
    ```python
    python
    CopyEdit
    print(add.__doc__)
    
    ```
    
    ---
    
    ## 🔁 11. Nested Functions
    
    Function defined inside another function.
    
    ```python
    python
    CopyEdit
    def outer():
        def inner():
            print("Inside inner")
        inner()
    
    ```
    
    ---
    
    ## 🧠 12. Function Scope (LEGB Rule)
    
    | **Scope Type** | **Where it Applies** |
    | --- | --- |
    | **Local** | Inside the function |
    | **Enclosing** | Inside enclosing functions (if nested) |
    | **Global** | At the top-level of the script |
    | **Built-in** | Provided by Python (like `print`, `len`, etc.) |
    
    ---
    
    ## ❓ 13. Common Interview Questions
    
    | Question | Concept Tested |
    | --- | --- |
    | Write a function to reverse a string | String manipulation |
    | Difference between `*args` and `**kwargs` | Flexible arguments |
    | How does Python handle function scope? | LEGB rule |
    | What is a lambda function and when to use it? | Functional programming |
    | Write a function to find the factorial of a number | Recursion or loop logic |
    | Use a function to filter even numbers from a list | List, loop, condition, func |
    
    ---
    
    ## ✅ Summary Table
    
    | **Feature** | **Description** |
    | --- | --- |
    | `def` | Keyword to define a function |
    | `return` | Sends result back to caller |
    | Parameters | Variables in function definition |
    | Arguments | Actual values passed |
    | Default Arguments | Parameters with default values |
    | `*args` | Tuple of arbitrary positional arguments |
    | `**kwargs` | Dict of arbitrary keyword arguments |
    | `lambda` | One-line anonymous function |
    | Nested Function | Function inside another |
    | Scope (LEGB) | Local, Enclosing, Global, Built-in variable resolution |
    

- Classes
    
    **What is it?**
    
    A class is a blueprint for creating objects (a combination of data and functions).
    
    **Example:**
    
    ```python
    python
    CopyEdit
    class Person:
        def __init__(self, name, age):  # Constructor
            self.name = name
            self.age = age
    
        def greet(self):
            return f"My name is {self.name} and I am {self.age} years old."
    
    # Create object
    p = Person("Akash", 30)
    print(p.greet())
    
    ```
    
    **Explanation:**
    
    - `__init__`: Constructor that initializes the object.
    - `self`: Refers to the current object.
    - `p` is an object (instance) of class `Person`.
    
    **Classes and Object-Oriented Programming (OOP)** in Python — a core concept in software engineering and commonly asked in interviews at companies like **Meta**.
    
    ---
    
    # 🧱 Python Classes & Object-Oriented Programming (OOP)
    
    Object-Oriented Programming (OOP) allows you to **model real-world entities** using code. It helps structure programs in a **modular, reusable**, and **scalable** way.
    
    ---
    
    ## 🧠 1. What is a Class?
    
    - A **class** is a blueprint for creating **objects**.
    - Objects are **instances** of classes.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    class Dog:
        def bark(self):
            print("Woof!")
    
    ```
    
    ---
    
    ## 🧠 2. What is an Object?
    
    - An **object** is an **instance** of a class.
    - It contains **attributes** (data) and **methods** (functions).
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    dog1 = Dog()
    dog1.bark()  # Output: Woof!
    
    ```
    
    ---
    
    ## 🔩 3. `__init__()` Method (Constructor)
    
    - A special method called **automatically** when an object is created.
    - Used to **initialize attributes**.
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    class Dog:
        def __init__(self, name):
            self.name = name
    
        def bark(self):
            print(f"{self.name} says Woof!")
    
    dog1 = Dog("Buddy")
    dog1.bark()  # Output: Buddy says Woof!
    
    ```
    
    ---
    
    ## ⚙️ 4. Attributes and Methods
    
    | **Term** | **Explanation** |
    | --- | --- |
    | Attribute | Variable attached to an object (`self.name`) |
    | Method | Function attached to an object (`bark()`) |
    
    ---
    
    ## 🔐 5. Encapsulation
    
    - **Hiding internal data** using private/protected access.
    - Use `_` or `__` to indicate access level.
    
    ```python
    python
    CopyEdit
    class Person:
        def __init__(self, name):
            self.__name = name  # private
    
        def get_name(self):
            return self.__name
    
    ```
    
    ---
    
    ## 🧬 6. Inheritance
    
    - A class can **inherit properties** from another class.
    
    ```python
    python
    CopyEdit
    class Animal:
        def speak(self):
            print("Animal sound")
    
    class Dog(Animal):
        def speak(self):
            print("Bark")
    
    dog = Dog()
    dog.speak()  # Output: Bark
    
    ```
    
    ---
    
    ## 🔁 7. Polymorphism
    
    - Ability to **use a unified interface** for different types.
    
    ```python
    python
    CopyEdit
    class Cat:
        def sound(self):
            print("Meow")
    
    class Dog:
        def sound(self):
            print("Bark")
    
    for animal in [Cat(), Dog()]:
        animal.sound()
    
    ```
    
    ---
    
    ## 🧱 8. Class vs Instance Variables
    
    | Type | Defined In | Shared Among Objects | Example |
    | --- | --- | --- | --- |
    | Instance Variable | `__init__()` | ❌ No | `self.name = name` |
    | Class Variable | Inside Class | ✅ Yes | `species = "Dog"` |
    
    ---
    
    ## 🔁 9. Static & Class Methods
    
    | Type | Decorator | Access to `self`? | Use Case |
    | --- | --- | --- | --- |
    | Instance Method | None | ✅ Yes | Access instance data |
    | Class Method | `@classmethod` | ❌ Uses `cls` | Access class data |
    | Static Method | `@staticmethod` | ❌ No | Utility methods not tied to instance or class |
    
    ---
    
    ### 🔹 Example:
    
    ```python
    python
    CopyEdit
    class Math:
        @staticmethod
        def add(a, b):
            return a + b
    
    ```
    
    ---
    
    ## ❓ Common Interview Questions (Meta / FAANG)
    
    | Question | Concept |
    | --- | --- |
    | Explain `__init__`, `self`, and class vs. instance variables | OOP Fundamentals |
    | What is inheritance and how does Python implement it? | Inheritance |
    | Difference between `@classmethod`, `@staticmethod`, methods | Method types |
    | Implement a Bank Account class with deposit & withdraw | Class, attributes, logic |
    | How do you achieve encapsulation in Python? | Private variables, getters |
    
    ---
    
    ## ✅ Summary Table
    
    | **Concept** | **Description** |
    | --- | --- |
    | `class` | Blueprint for creating objects |
    | `__init__()` | Constructor method called on object creation |
    | `self` | Refers to the current instance |
    | Object | Instance of a class |
    | Method | Function defined inside a class |
    | Attribute | Variable bound to object (`self.name`) |
    | Inheritance | One class deriving from another |
    | Polymorphism | Same method name, different behavior |
    | Encapsulation | Restricting direct access using `_` and `__` |
    | `@staticmethod` | Doesn't need instance or class reference |
    | `@classmethod` | Works with the class not instance (`cls`) |
    
    # Python Classes & Object-Oriented Programming (OOP) - Cheat Sheet
    
    ## 🧱 Object-Oriented Programming (OOP)
    
    OOP models real-world entities using code. It emphasizes **modularity**, **reusability**, and **scalability**.
    
    ---
    
    ## 👀 1. What is a Class?
    
    A **class** is a blueprint for creating **objects**.
    
    ```python
    class Dog:
        def bark(self):
            print("Woof!")
    
    ```
    
    ---
    
    ## 👀 2. What is an Object?
    
    An **object** is an **instance** of a class.
    
    ```python
    dog1 = Dog()
    dog1.bark()  # Output: Woof!
    
    ```
    
    ---
    
    ## 🔧 3. `__init__()` Constructor
    
    Initializes attributes when an object is created.
    
    ```python
    class Dog:
        def __init__(self, name):
            self.name = name
    
        def bark(self):
            print(f"{self.name} says Woof!")
    
    dog1 = Dog("Buddy")
    dog1.bark()  # Output: Buddy says Woof!
    
    ```
    
    ---
    
    ## 🔧 4. Attributes and Methods
    
    | Term | Explanation |
    | --- | --- |
    | Attribute | Data attached to an object |
    | Method | Function attached to an object |
    
    ---
    
    ## 🔐 5. Encapsulation
    
    Hiding internal data using private variables.
    
    ```python
    class Person:
        def __init__(self, name):
            self.__name = name  # private
    
        def get_name(self):
            return self.__name
    
    ```
    
    ---
    
    ## 🧫 6. Inheritance
    
    One class inherits properties/methods from another.
    
    ```python
    class Animal:
        def speak(self):
            print("Animal sound")
    
    class Dog(Animal):
        def speak(self):
            print("Bark")
    
    dog = Dog()
    dog.speak()  # Output: Bark
    
    ```
    
    ---
    
    ## 🧬 7. Polymorphism
    
    Unified interface for different class types.
    
    ```python
    class Cat:
        def sound(self):
            print("Meow")
    
    class Dog:
        def sound(self):
            print("Bark")
    
    for animal in [Cat(), Dog()]:
        animal.sound()
    
    ```
    
    ---
    
    ## 🏢 8. Class vs Instance Variables
    
    | Type | Defined In | Shared? | Example |
    | --- | --- | --- | --- |
    | Instance Variable | `__init__()` | No | `self.name = name` |
    | Class Variable | Inside Class | Yes | `species = "Dog"` |
    
    ---
    
    ## ⚙️ 9. Static & Class Methods
    
    | Type | Decorator | Self/Cls | Purpose |
    | --- | --- | --- | --- |
    | Instance Method | None | `self` | Access instance data |
    | Class Method | `@classmethod` | `cls` | Access class data |
    | Static Method | `@staticmethod` | None | Utility method not tied to object |
    
    ```python
    class Math:
        @staticmethod
        def add(a, b):
            return a + b
    
    ```
    
    ---
    
    ## ❓ Common Interview Questions
    
    | Question | Concept |
    | --- | --- |
    | Explain `__init__`, `self`, class vs instance vars | OOP Fundamentals |
    | How does Python implement inheritance? | Inheritance |
    | Difference between `@classmethod`, `@staticmethod`, method | Method types |
    | Implement a Bank Account class with deposit/withdraw | Attributes, logic |
    | How is encapsulation achieved in Python? | Private variables, accessors |
    
    ---
    
    ## ✅ Summary Table
    
    | Concept | Description |
    | --- | --- |
    | `class` | Blueprint for creating objects |
    | `__init__()` | Constructor method |
    | `self` | Refers to the instance |
    | Object | Instance of a class |
    | Method | Function inside class |
    | Attribute | Data bound to an object |
    | Inheritance | Reusing features from another class |
    | Polymorphism | Same interface, different behavior |
    | Encapsulation | Restrict access to internal attributes |
    | `@staticmethod` | Method without `self` or `cls` |
    | `@classmethod` | Method with `cls` parameter for class-level access |
    
    ---
    

[Python Interview QnS](https://www.notion.so/Python-Interview-QnS-20e1c52fabdf801182f2c08bf8ef6a00?pvs=21)

[Quick notes](https://www.notion.so/Quick-notes-20f1c52fabdf80738f83f657e953ae09?pvs=21)

[Practice Question ](https://www.notion.so/Practice-Question-20f1c52fabdf80a3be5bdc6c884d5868?pvs=21)

[Meta Friday Call Question](https://www.notion.so/Meta-Friday-Call-Question-2111c52fabdf80d6af29d42fa214d0e5?pvs=21)

[Doubts](https://www.notion.so/Doubts-2111c52fabdf805fb9abf0ca2387d728?pvs=21)

[Meta Tips](https://www.notion.so/Meta-Tips-2121c52fabdf8028a876c16b146bed6f?pvs=21)

[LeetCodes](https://www.notion.so/LeetCodes-2191c52fabdf8028a053c9ffbeba9196?pvs=21)

[DSA](https://www.notion.so/DSA-21c1c52fabdf807db92fdf6579031a3a?pvs=21)