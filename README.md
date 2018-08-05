# beeminder-advanced-parser
Just a bit of JavaScript to be able to input more flexible forms of data into Beeminder's "Advanced Entry."


## How Beeminder advanced entry currently works
Beeminder requires input of the form `date units "comment"` where the quotes-enclosed comment is optional. `date` may be a valid day of the month or any number of consecutive carats `^`. A single carat represents "today," two represent "yesterday," and so on. Quotes are always mandatory. Newline separators may be used to insert multiple records at once:

```
7 100 "snack"
^ 350 "french fries"
^^ 825 "salad with ranch dressing"
```


## What this code does
It simply attempts to convert more flexible data entry forms to the native Beeminder form.

```
7 100 snack
350 french fries
^^ 825 salad with ranch dressing
```


## How to use this
I envision this being used in a TamperMonkey user script, binding Ctrl + Enter while focused in the Advanced Entry form. The user script will save the textarea's contents (in memory), replace them with the "standardized" content produced by this repo's code, submit the form, and wait for a change that indicates success or failure. If failure, replace the textarea again with the original contents.


## A note on validation
This code does not attempt to re-implement any error checking that Beeminder might use, but merely to convert unacceptable forms to acceptable forms. For example, Beeminder will (probably?) accept `20 100 "calories"` and reject `40 100 "calories"` because there are no months with 40 days, but this code will still convert `40 100 multiple words` into `40 100 "multiple words"`, leaving the error checking to Beeminder.
