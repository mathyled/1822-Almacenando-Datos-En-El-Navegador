export const uniqueDates = (task) => {
    const unique = [];
    if(!task.dateFormat){
        return
    }
    console.log(task);
    task.forEach(task => {
        if (!unique.includes(task.dateFormat)) {
            unique.push(task.dateFormat)
        }
    });
    return unique
}


export const orderDate = (dates) => {
    return dates.sort( (a, b) => {
        const first = moment(a, "DD/MM/YYYY")
        const second = moment(b, "DD/MM/YYYY")
        return first - second
    })
}