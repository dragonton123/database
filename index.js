const {post,postuag} = require('../service/index')


exports.record_to_database = async (port_swap_margin,port_no_swap_margin,lot,balance_all,equity_all,swap_all,profit_all) => {
  
    try {
        console.log('record to database')
        await postuag(`http://127.0.0.1:3040/api/v1/carry/insert_asset_data`,JSON.stringify({"port_swap_margin": port_swap_margin,
                    "port_no_swap_margin": port_no_swap_margin,
                    "lot": lot,
                    "balance_all": balance_all,
                    "equity_all": equity_all,
                    "swap_all": swap_all,
		    "profit_all":profit_all
    }))
        post('บันทึกข้อมูลลงฐานข้อมูลสำเร็จ')
    } catch (error) {
        post(error)
//        controller();
    }

}
