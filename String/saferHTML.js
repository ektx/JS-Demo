function SaferHTML(tem) {
    console.log(tem, arguments)
    let s = tem[0]

    for (let i = 1; i < arguments.length; i++) {
        let arg = String(arguments[i])

        s += arg.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/</g, '&gt;')

        s += tem[i]
    }

    return s
}

let send = '<script>alert(1)</script>'
console.log(SaferHTML`<p>${send} has sent you a message.</p>`)