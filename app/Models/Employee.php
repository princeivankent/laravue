<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    public static function getUser ($employee_number, $password)
    {
        $query = DB::connection('ipc_central')
            ->table('personal_information_tab as pit')
            ->select(
                'emt.id',
                'emt.employee_no',
                'emt.cost_center',
                DB::raw('CONCAT(pit.last_name,", ",pit.first_name) as name'),
                'emt.position_title',
                'st.section',
                'dprtmnt.department',
                'dvsnt.division',
                'ast.user_type_id'
            )
            ->leftJoin('employee_masterfile_tab as emt', 'emt.id', '=', 'pit.employee_id')
            ->leftJoin('password_tab as pwt', 'pwt.employee_id', '=', 'emt.id')
            ->leftJoin('section_tab as st', 'st.id', '=', 'emt.section_id')
            ->leftJoin('department_tab as dprtmnt', 'dprtmnt.id', '=', 'emt.department_id')
            ->leftJoin('division_tab as dvsnt', 'dvsnt.id', '=', 'emt.division_id')
            ->leftJoin('user_access_tab as ast', 'ast.employee_id', '=', 'emt.id')
            ->where([
                'emt.employee_no' => $employee_number,
                'pwt.password'    => $password
            ])
            ->first();
            
        return $query;
    }

    public static function getUserById ($employee_id)
    {
        $query = DB::connection('ipc_central')
            ->table('personal_information_tab as pit')
            ->select(
                'emt.id',
                'emt.employee_no',
                DB::raw('CONCAT(pit.last_name,", ",pit.first_name) as name'),
                'emt.position_title',
                'st.section',
                'dprtmnt.department',
                'dvsnt.division',
                'ast.user_type_id'
            )
            ->leftJoin('employee_masterfile_tab as emt', 'emt.id', '=', 'pit.employee_id')
            ->leftJoin('password_tab as pwt', 'pwt.employee_id', '=', 'emt.id')
            ->leftJoin('section_tab as st', 'st.id', '=', 'emt.section_id')
            ->leftJoin('department_tab as dprtmnt', 'dprtmnt.id', '=', 'emt.department_id')
            ->leftJoin('division_tab as dvsnt', 'dvsnt.id', '=', 'emt.division_id')
            ->leftJoin('user_access_tab as ast', 'ast.employee_id', '=', 'emt.id')
            ->where([
                'emt.id' => $employee_id
            ])
            ->first();
        
        $query->name = ucwords(strtolower($query->name));
        $query->position_title = ucwords(strtolower($query->position_title));
        $query->department = ucwords(strtolower($query->department));
        $query->division = ucwords(strtolower($query->division));
        $query->section = ucwords(strtolower($query->section));
            
        return $query;
    }

    public static function getUserNameById ($employee_id)
    {
        $query = DB::connection('ipc_central')
            ->table('personal_information_tab as pit')
            ->select(
                'pit.employee_id',
                DB::raw('CONCAT(pit.last_name,", ",pit.first_name) as name')
            )
            ->whereEmployeeId($employee_id)
            ->first();
        
        // $query->name = ucwords(strtolower($query['name']));
            
        return $query;
    }
}
