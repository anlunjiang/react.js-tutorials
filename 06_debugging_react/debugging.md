# Debugging React Apps

* Error Messages
  * React usually gives you comprehensive error messages
  * As well as the line where the error was encountered
  * The developer tool actually can give you warnings that may give you clues about a bug
* Break Points
  * The developer tools actually are able to pick up metadata from your ide and this includes breakpoints
  * You are there in the sources tab in WDT your source code
  * From there you can add a breakpoint in your actual source code
  * AND IT WILL PAUSE EXECUTION NEXT TIME THE CODE IS REACHED!
  * From there you can step into your code 1 by 1
* React DevTools
  * This is a webbrowser extension! And offers two tabs in your WDT - Profiler and Components
    * Profiler
    * Components - give you a comprehensive component tree - specific to react and all their props
    as well as what component rendered them -and their hooks - which reflect say; state!/