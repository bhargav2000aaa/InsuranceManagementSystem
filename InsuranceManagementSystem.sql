create database insurancemanagement;

use insurancemanagement;

create table insurancecategory(id int primary key,category varchar(100));

insert into insurancecategory values (1,"Health Insurance"),(2,"Home Insurance");

create table healthinsurance(id int primary key auto_increment,policyname varchar(100),
							sumassurance double,monthleypay double,noofmonths int,
                            diseasescovered text,hospitals text,categoryid int,
                            foreign key(categoryid) references insurancecategory(id));
                            
insert into   healthinsurance (id,policyname,sumassurance,monthleypay,noofmonths,diseasescovered,
								hospitals,categoryid)values(400, "Diabetes Safe Insurance Policy",400000,
                                sumassurance/noofmonths,24,"diabetes","Apollo hospital,ABM hospital,Wockhardt hospital",1) ;
                                select *from healthinsurance;
							
create table homeinsurance(id int primary key auto_increment,policyname varchar(100),city varchar(100),areaname varchar(100),
							monthleypremium double,sumassurance double,time int,categoryid int,
                            foreign key(categoryid) references insurancecategory(id));
insert into  homeinsurance (policyname,city,areaname,monthleypremium,sumassurance,time,categoryid) values ("Electrical Breakdown",
								"Hyderabad","Gachibowli,Manikonda,Nanakramguda",25000,300000,12,2) ; 
                                
create table users(id int primary key auto_increment,name varchar(100),email varchar(100),mobilenumber int,password varchar(100),address text,
					healthid int,homeid int,healthpremiumleft double,homepremiumleft double,healthstatus bit(1),homestatus bit(1),
				 foreign key(healthid) references healthinsurance(id),
                 foreign key(homeid) references homeinsurance(id));
                 
insert into users (name,email,mobilenumber,password,address) values("Arjun","Arjun@Gmail.com",456789678,"abcd123","Hyderabad");
 
 select *from users;

create table admin(id int primary key auto_increment,email text,password varchar(100)); 
insert into admin (email,password) values("bhargav@gmail.com","bhargav123");
insert into admin (email,password) values("akash@gmail.com","akash123");
insert into admin (email,password) values("mohan@gmail.com","mohan123");
select *from admin;  
		
                    
                   