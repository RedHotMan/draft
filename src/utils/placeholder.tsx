const placeholder = `
# Hello World ✌️

**Draft** is a markdown editor  
You can check the code [here](https://github.com/RedHotMan/draft)

## What you can dzo

1. #### Text style
   * **Bold**
   * *Italic*
   * ~~Strike~~
   * >Blockquote


2. #### Code
   * \`inline code\`
   * Block code
   \`\`\`javascript
   import React from 'react';
   \`\`\`


3. #### Lists

* Item
* Item
   * Child Item
     * Child Item 1
   * Child Item
   

4. #### Tables

  | Username      | Power         |
  | ------------- |:-------------:|
  | Goku          | 100           |
  | Vegeta        | 99            |
  | Gohan         | 92            |


5. #### Links

  Here is [the link](https://github.com/RedHotMan/draft)   
  [A link with a title](https://github.com/RedHotMan/draft "Link title, just hover it")


6. #### Images
![Avatar](https://avatars.githubusercontent.com/u/10242454?s=150&u=63d9db58e45dcd32c7636bee765158ece62a9294)


7. #### More...
  For more informations, you can visit this [page](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
`.trim();

export default placeholder;
