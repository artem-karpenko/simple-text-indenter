# simple-text-indenter

Transform stream for simple bracket-based text indentation.

## Description

Simply speaking it transforms the following text

    if (true) {for (let i = 0; i < 10; i++){console.log(a[i]);}}

into the following

```
if (
   true
)
 {
   for (
      let i = 0; i < 10; i++
   )
   {
      console.log(
         a[
            i
         ]
         
      )
      ;
   }
   
}
```

Not the most useful for actual code formatting, but can be useful for logging puproses.