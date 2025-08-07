import Employee from'../components/Employee'


// 建立陣列物件資料

const arrEmployee = [
    {
        id: 2,
        name: "員工2",
        age: "26",
        h:123,
        w:13
    },
    {
        id: 2,
        name: "員工2",
        age: "26",
        h:123,
        w:13
    },
    {
        id: 3,
        name: "員工3",
        age: "24",
        h:843,
        w:15
    },
]

const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件，使用陣列物件資料:搭配map */}
            {
                arrEmployee.map((emp) => {
                    return (
                        <Employee key={emp.id} name={emp.name} age={emp.age} h={emp.h} w={emp.w}/>
                    )

                })
            }

            {/* // 建立物件資料
            const employee={
                emp1:{
                name:"員工一",
            age:"21"
    },
            emp2:{
                name:"員工一",
            age:"21"
    },
            emp3:{
                name:"員工一",
            age:"21"
    },
} */}
            {/* 呼叫員工元件，使用物件資料
            <Employee name={employee.emp1.name} age={employee.emp1.age}/>
            <Employee name={employee.emp2.name} age={employee.emp2.age}/>
            <Employee name={employee.emp3.name} age={employee.emp3.age}/> */}

            {/* 呼叫員工元件，使用固定值 */}
            {/* <Employee name="員工一" age="21"/>
            <Employee name="員工二" age="2"/>
            <Employee name="員工三" age="25"/> */}
        </div>
    )
}

export default App