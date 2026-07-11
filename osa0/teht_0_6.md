sequenceDiagram
    participant browser
    participant server

    note right of browser: Input something to input element.
    note right of browser: Hit save
    note right of browser: Browser executes forms onSubmit
    note right of browser: After execution redraws and sends data to server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server ->>browser: POST response: { status: 201,  message : note created}
