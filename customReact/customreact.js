function customRender(reactElement ,container){
    const donElement = document.createElement (reactElement.type)
    domElement.innerHtml = reactElement.childern
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('href',reactElement.props.target)
}

const reactElement={
        type : 'a',
        props: {
            herf: 'https://google.com',
            target: '_blank'
       },
}

const mainContainer = document.querySelector("#root")
