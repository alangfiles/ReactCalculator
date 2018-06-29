#Demo Calculator App

This is a simple calculator demo in react. I saw some other demos online, and most of them created a string by concatenating button pushes (like '1 + 3 + 5') and then called `eval()` on that string. I decided to try for a more 'physical' calculator, and I keep two registers, each with a number value*. Some of the more 'fun' features my calculator has are that if you keep pressing `=` it will keep reapplying the last operation (most real calculators do this), and if you put in `1 + 5 + 5` it will update on each `+` press, if the appropriate registers are filled. This is kinda a fun way to go about this, but maybe I should have kept from that madness and just used the cleaner `eval` ;) Oh well, the heart wants what it wants.


*I thought about just restricting this to int32, so that I could even use bitwise magic for adding (are javascript int32 even in 2's complement? clearly I would have been over my head, and this madness wasn't worth pursuing :) 