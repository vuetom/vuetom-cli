---
title: Code Block
---

# {{ $frontmatter.title }}

## Show

Wrap the code with three ` symbols

<br/>

**Light Theme**

Can be in language_ Add after key  `light`

Input：

<div>
```java light
</div>
String language = "Java"; 

<div>
  ```
</div>

Output：

```java light
String language = "Java";
```

<br/>

**Dark Theme**

The default is dark

Input：

<div>
```js
</div>
String language = "JS"; 

<div>
  ```
</div>

Output：

```java
String language = "JS";
```

<br/>

**Effect**

- javascript ( js )

```js 
function fun(){
    echo "Hello, World!";
}
fun();
```

- Java ( java )
```java
System.out.print(1);
```
- Python ( py )

```py
#!/usr/bin/env python3
print("Hello, World!");
```

- SQL ( sql )
```sql
select user_name from user_info
```

- Shell ( bash, shell )
```bash
echo '1'
```
