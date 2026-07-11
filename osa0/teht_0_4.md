sequenceDiagram
    participant browser
    participant server
    note right of browser: We input something and hit save
    note right of browser: Payload: input element_value
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    
    note left of server: Server appends input to notes and sends redirect to /notes page as POST to browser 
    server-->>browser: POST with response: 302
    deactivate server
    
    note right of  browser: browser redirects /exampleapp/notes (reloads page) 

