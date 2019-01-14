<?php

use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $insertData = [
            [
                'id' => 1,
                'name' => 'index',
                'title' => '首页',
                'guard_name' => 'admin',
                'pid' => 0,
                'url' => '/',
                'sort' => 0,
                'icon' => 'fa fa-home',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 10,
                'name' => 'index',
                'title' => '首页',
                'guard_name' => 'agent',
                'pid' => 0,
                'url' => '/',
                'sort' => 0,
                'icon' => 'fa fa-home',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 100,
                'name' => 'system_manage',
                'title' => '后台系统管理',
                'guard_name' => 'admin',
                'pid' => 0,
                'url' => '',
                'sort' => 0,
                'icon' => 'fa fa-gears',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 110,
                'name' => 'system_manage',
                'title' => '系统管理',
                'guard_name' => 'agent',
                'pid' => 0,
                'url' => '',
                'sort' => 0,
                'icon' => 'fa fa-gears',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            /* 管理员管理 */
            [
                'id' => 1000,
                'name' => 'admin.index',
                'title' => '管理员管理',
                'guard_name' => 'admin',
                'pid' => 100,
                'url' => '',
                'sort' => 3,
                'icon' => 'fa fa-user',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1001,
                'name' => 'admin.create',
                'title' => '添加管理员',
                'guard_name' => 'admin',
                'pid' => 1000,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1002,
                'name' => 'admin.show',
                'title' => '展示管理员',
                'guard_name' => 'admin',
                'pid' => 1000,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1003,
                'name' => 'admin.edit',
                'title' => '修改管理员',
                'guard_name' => 'admin',
                'pid' => 1000,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1004,
                'name' => 'admin.destroy',
                'title' => '删除管理员',
                'guard_name' => 'admin',
                'pid' => 1000,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            /*代理商管理*/
            [
                'id' => 1100,
                'name' => 'agents.index',
                'title' => '代理商管理',
                'guard_name' => 'agent',
                'pid' => 110,
                'url' => '',
                'sort' => 0,
                'icon' => 'fa fa-user',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1110,
                'name' => 'agents.create',
                'title' => '添加代理商',
                'guard_name' => 'agent',
                'pid' => 1100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1120,
                'name' => 'agents.show',
                'title' => '展示代理商',
                'guard_name' => 'agent',
                'pid' => 1100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1130,
                'name' => 'agents.edit',
                'title' => '修改代理商',
                'guard_name' => 'agent',
                'pid' => 1100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 1140,
                'name' => 'agents.destroy',
                'title' => '删除管理员',
                'guard_name' => 'agent',
                'pid' => 1100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            /* 角色管理 */
            [
                'id' => 2100,
                'name' => 'roles.index',
                'title' => '角色管理',
                'guard_name' => 'agent',
                'pid' => 110,
                'url' => 'roles',
                'sort' => 2,
                'icon' => 'fa fa-puzzle-piece',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2101,
                'name' => 'roles.create',
                'title' => '添加角色',
                'guard_name' => 'agent',
                'pid' => 2100,
                'url' => 'roles/create',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2102,
                'name' => 'roles.show',
                'title' => '展示角色',
                'guard_name' => 'agent',
                'pid' => 2100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2103,
                'name' => 'roles.edit',
                'title' => '修改角色',
                'guard_name' => 'agent',
                'pid' => 2100,
                'url' => 'roles/edit',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2104,
                'name' => 'roles.destroy',
                'title' => '删除角色',
                'guard_name' => 'agent',
                'pid' => 2100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2105,
                'name' => 'roles.status',
                'title' => '角色状态',
                'guard_name' => 'agent',
                'pid' => 2100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 2106,
                'name' => 'roles.permission_tree',
                'title' => '权限节点树',
                'guard_name' => 'agent',
                'pid' => 2100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            /* 权限管理 */
            [
                'id' => 3100,
                'name' => 'permissions.index',
                'title' => '权限管理',
                'guard_name' => 'agent',
                'pid' => 110,
                'url' => 'permissions',
                'sort' => 1,
                'icon' => 'fa fa-sitemap',
                'is_nav' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3101,
                'name' => 'permissions.create',
                'title' => '添加权限',
                'guard_name' => 'agent',
                'pid' => 3100,
                'url' => 'permissions/create',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3102,
                'name' => 'permissions.show',
                'title' => '展示权限',
                'guard_name' => 'agent',
                'pid' => 3100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3103,
                'name' => 'permissions.edit',
                'title' => '修改权限',
                'guard_name' => 'agent',
                'pid' => 3100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3104,
                'name' => 'permissions.destroy',
                'title' => '删除权限',
                'guard_name' => 'admin',
                'pid' => 3100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'id' => 3105,
                'name' => 'permissions.sort',
                'title' => '排序权限',
                'guard_name' => 'agent',
                'pid' => 3100,
                'url' => '',
                'sort' => 0,
                'icon' => '',
                'is_nav' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            /* 默认选中项 */
        ];

        DB::table('permissions')->insert($insertData);
    }
}
