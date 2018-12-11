export const colorClassName = hex => {
    if(!hex){
        return 'no-color'
    }
    const colorMap = {
        '#17A077': 'bt-green',
        '#1aa4d7': 'bt-blue',
        '#444'   : 'bt-dk-gray'
    }

    return colorMap[hex] || 'no-match'
}