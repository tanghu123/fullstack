#Add Three roles User  password is admin
insert into emart.user(name, username, password, email, phone_number,role) values('Administrator','admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'hutang@cn.ibm.com', '+8613971249430',0);
insert into emart.user(name, username, password, email, phone_number,role) values('buyer','buyer', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'tang_hu123@163.com', '+8613971249430',1);
insert into emart.user(name, username, password, email, phone_number,role) values('seller','seller', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'liyan@163.com', '+8613971249430',2);

#Init some Categories
insert into emart.category(name,brief) values('Electronic','Electronic');
insert into emart.category(name,brief) values('Fashion','Fashion');
insert into emart.subcategory(name,brief,category_id,gst) values('TV','TV', 1, 13);
insert into emart.subcategory(name,brief,category_id,gst) values('Computer','Computer', 1, 13);
insert into emart.subcategory(name,brief,category_id,gst) values('Clothes','Clothes', 2, 15);