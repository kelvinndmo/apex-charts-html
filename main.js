//chart options
const options = {
    chart:{
        height:450,
        width:'100%',
        type:'bar',
        background:'#f4f4f4',
        foreColor:'#333'
    },
    series:[{
        name:'Population',
        data:[234123, 212323, 123423, 212134, 121243, 123242, 12243, 132354]
    }],
    xaxis:{
        categories:['Nairobi','Kisumu','Kenya', 'Nakuru','Eldoret','Nyanyki','Molo','Andela']
    },
    plotOptions:{
        bar:{
            horizontal:false
        }
    },
    fill:{
        colors:'#3CB534'
    },
    dataLabels:{
        enabled:false
    },
    title:{
        text:'Employee reporting rate',
        align:'center',
        margin:20,
        offsetY:20,
        style:{
            fontsize:'25px'
        }
    }
}


//init chart

const chart = new ApexCharts(document.querySelector('#chart'), options)

//render chart
chart.render()

//Event method example
document.querySelector('button').addEventListener('click', () => chart.updateOptions({
       plotOptions:{
           bar:{
               horizontal:true
           }
       } 
    })
)