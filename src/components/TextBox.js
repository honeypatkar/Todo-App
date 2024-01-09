import React from 'react'

export default function TextBox() {
  return (
    <div>
     <input id='new-todo' placeholder='what needs to be done?' autoFocus/>
     <style jsx="true">{`
        #new-todo,
        .edit {
            position: relative;
            margin: 0;
            width: 100%;
            font-size: 24px;
            font-family: inherit;
            line-height: 1.4em;
            border: 0;
            outline: none;
            color: inherit;
            padding: 6px;
            border: 1px solid #999;
            box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            -o-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            -ms-font-smoothing: antialiased;
            -o-font-smoothing: antialiased;
        }
        
        #new-todo{
          padding: 16px 16px 16px 60px;
            border: none;
            background: rgba(0, 0, 0, 0.02);
            z-index: 2;
            box-shadow: none;
        }
        
        
     `}</style>
    </div>
  )
}
