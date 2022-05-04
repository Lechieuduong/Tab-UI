// var myArray = ['Duong', 'Chieu', 'Le'];

// var myArray2 = [1, 2, 3, 4, 5];



// console.log(myArray.concat(myArray2));



// var jsonString = "Duong Le"

// console.log(JSON.stringify(jsonString));


// // Sync / Async
// // 1. Ví dụ về Sync
// console.log(1);
// console.log(2);
// // Sync:  cái gì viết trc chạy trc cái nào viết sau chạy sau

// //2. Ví dụ về Async
// // Theo tư duy đồng bộ thì thg số 1 in ra trc và số 2 in ra sau

// setTimeout(function() {
//     console.log(1);
// }, 1000);

// console.log(2);


// var promise = new Promise(function(resolve, reject) {
//     if (typeof resolve === 'function') {
//         resolve({
//             id: 1, 
//             name: 'Javascript'
//         });
//     }else {
//         reject(console.log('An error'));
//     }
// });

// promise
//     .then(function(courses) {
//         return new Promise(function(resolve){
//             setTimeout(function() {
//                 resolve(courses);
//             }, 3000);
//         });
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(){
//         console.log(eror);
//     })
//     .finally(function(){
//         console.log('Done!');
//     })

// function sleep(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(4);
//     })
  
// var promise = new Promise(function(resolve, reject){
//     if (resolve) {
//         resolve('Success!');
//     }else{
//         reject('Error');
//     }
// })

// promise
//     .then(function(resolve){
//         console.log('Result: ' + resolve);
//     })
//     .catch(function(err){
//         console.log('Error: ' + err);
//     })

// var promise1 = new Promise(
//     function(resolve){
//         setTimeout(function() {
//             resolve([1]);
//         }, 2000);
//     }
// );

// var promise2 = new Promise(
//     function(resolve){
//         setTimeout(function() {
//             resolve([2, 3]);
//         }, 5000);
//     }
// );

// Promise.all([promise1, promise2])
//     .then(function([result1, result2]){
//         console.log(result1.concat(result2));
//     })

// var user = [
//     {
//         id: 1,
//         name: "Duong Chieu"
//     },
//     {
//         id: 2,
//         name: "Son Dang"
//     },
    
//     {
//         id: 3,
//         name: "Tung Nguyen"
//     }
// ];

// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: "Anh Son chua ra video :<"
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: "Vua ra xong em oi"
//     },
//     {
//         id: 3,
//         user_id: 1,
//         content: "CAm on anh :>>"
//     }
// ];

// // 1. Lấy commnents
// //2. Từ comments lấy ra user_id
// // từ user_id lấy ra user tương ứng

// //Fake API

// //Tạo 1 function để lấy ra comment
// function getComments(){
//     // Trong Constructor tạo 1 Promise với tham số truyền vào là resolve
//     //Tức nghĩa chỉ thực hiện thành công Constructor này
//     return new Promise(function(resolve){
//         // Sử dụng setTimeout để minh họa cho đường truyền Internet
//         setTimeout(function(){
//             //Gọi đến callBack resolve để lấy ra object comments
//             resolve(comments);
//         }, 1000);
//     });
// };

// //Tạo 1 function để lấy ra thông tin user tham số truyền vào là userID
// function getUserByIds(userIds){
//     // Trong Constructor tạo 1 Promise với tham số truyền vào là resolve
//     //Tức nghĩa chỉ thực hiện thành công Constructor này
//     return new Promise(function(resolve){
//         //Tạo 1 biến là result truyền vào object user 1 điều kiện sử dụng 
//         // filter() method để lọc ra các phần tử trong mảng thỏa mãn 1 đk
//         // nào đó
//         var result = user.filter(function(user){
//             //Trong trả về tham số userId được dùng includes() method để kiểm
//             // tra id của user có nằm trong mảng hay không
//             return userIds.includes(user.id);
//         });

//         // Lại là 1 hàm setTimeout fake quá trình post 1 cái j đó lên internet
//         setTimeout(function(){
//             //Gọi đến callBack resolve để lấy ra result là kết quả của quá trình lọc
//             // ở trên
//             resolve(result);
//         }, 1000);
//     });
// }

// //Gọi lên function getComments()
// getComments()
//     //Sử dụng phương thức .then để xử lý các thao tác thành công
//     // của Promise, bên trong phương thức là 1 callback
//     .then(function(comments){
//         // Tạo ra 1 mảng mới có tên userIds để lưu kết quả từ việc thực thi 
//         // một àm lên từng phần tử của mảng ban đầu
//         var userIds = comments.map(function(comment){
//             //Trong này sẽ trả về user_id bên trong object comment và truyền vào
//             // mảng userIds vừa tạo
//             return comment.user_id;
//         });

//         // Ở đây trả về thông tin của User thông qua hàm getUserByIds
//         return getUserByIds(userIds)
//         .then (function(users){
//             return {
//                 users: users,
//                 comments: comments
//             };
//         })
//     })

//     .then(function(data){
//         var commentBlock = document.getElementById('comment-block');

//         var html = '';
//         data.comments.forEach(function(comment){
//             var user = data.users.find(function(user){
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`;
//         });
//         commentBlock.innerHTML = html;
//     });


// function myFunction(callBack){
//     callBack('Hoc lap trinh!');
// }

// function myCallBack(value){
//     console.log('Value: ', value);
// }

// myFunction(myCallBack)

// var users = [
//     {   id: 1,
//         name: 'Duong Le',
//     }, 
//     { 
//         id: 2,
//         name: 'Son Dang',
//     },
//     { 
//         id: 3,
//         name: 'Hung Dam',
//     }
// ];

// var comments = [
//     { 
//         id: 1,
//         user_id: 1,
//         content: 'Anh Son chua ra video',
//     }, 
//     {
//         id: 2,
//         user_id: 2,
//         content: 'Vua ra xong em oi',
//     }, 
//     {   id: 3, 
//         user_id: 1, 
//         content: 'Cam on anh :3',
//     }
// ];

// 1. Lấy commnents
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user_id

// Fake API 

// function getComments(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(comments);
//         }, 1000);
//     });
// }

// function getUsersByIds(userIds){
//     return new Promise(function(resolve){
//         var result = users.filter(function(user){
//             return userIds.includes(user.id);
//         });
//         setTimeout(function(){
//             resolve(result);
//         }, 1000);
        
//     });
// }

// getComments()
//     .then(function(comments){
//         var userIds = comments.map(function(comment){
//             return comment.user_id;
//         });
        
//         return getUsersByIds(userIds)
//             .then(function(users){
//                 return {
//                     users: users,
//                     comments: comments,
//                 };
//         });
//     })
//     .then(function(data) {

//         var comments = document.getElementById('comment-block');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user = data.users.find(function(user) {
//                 return user.id === comment.user_id;
//             });
//             html += `<li>${user.name}: ${comment.content}</li>`
//         });

//         comments.innerHTML = html;
//     });

// var id = document.getElementById('comment-block');

// console.log(typeof id);

// var postAPI = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (posts){
//         var htmls = posts.map(function (post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });

//         var html = htmls.join('');
//         document.getElementById('post-block').innerHTML = html;
//     })
//     .catch(function (err) {
//         alert('Có lỗi');
//     });


// var userAPI = 'https://jsonplaceholder.typicode.com/users'

// fetch(userAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then (function (users){
//         var html = users.map(function (user){
//             return `<li> 
//                 <h3>${user.username}</h3>
//                 <h4>${user.email}</h4>
//             </li>`;
//         });
//         var htmls = html.join('\n');
//         document.getElementById('user-block').innerHTML = htmls;
//     })
//     .catch (function (err){
//         alert('Có lỗi');
//     })

// var coursesAPI = 'http://localhost:3000/courses';

// fetch(coursesAPI)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (courses){
//         var html = courses.map(function (course){
//             return `<li>
//                 <h2>${course.name}</h2>
//                 <p>${course.description}</p>
//             </li>`;
//         });

//         var htmls = html.join('\n');
//         document.getElementById('user-block').innerHTML = htmls;

//     })
//     .catch(function (err){
//         alert(err.message);
//     });

// var courseListBlock = document.querySelector('#course-list');

// var courseApi = 'http://localhost:3000/courses';

// function start(){
//     getCourses(renderCourses);

//     handleCreateForm();
// }

// //Start
// start();

// function getCourses(callback){
//     fetch(courseApi)
//     .then(function (response){
//         return response.json();
//     })
//     .then(callback);
// }
// function createCourse(data, callback) {
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     };
    
//     fetch(courseApi, options)
//         .then(function (response) {
//             response.json();
//         })
//         .then(callback);
// }

// function handleDeleteCourse(id){
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
    
//     fetch(courseApi + '/' + id, options)
//         .then(function (response) {
//             response.json();
//         })
//         .then(function() {
//             var courseItem = document.querySelector('.course-item-' + id);
//             if (courseItem) {
//                 courseItem.remove();
//             }
        
//         });
// }

// function renderCourses(courses){
//     var courseListBlock = document.querySelector('#course-list');
    
//     var html = courses.map(function(course){
//         return `
//             <li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick="handleDeleteCourse(${course.id})">Xóa</button>        
//             </li>
//         `;
//     });

//     courseListBlock.innerHTML = html.join('\n');
// }

// function handleCreateForm(){
//     var createBtn = document.querySelector('#create');

//     createBtn.onclick = function() {
//         var name = document.querySelector('input[name="name"]').value;
//         var description = document.querySelector('input[name="description"]').value;
        
//         var formData = {
//             name: name,
//             description: description
//         };

//         createCourse(formData, function(){
//             getCourses(renderCourses);
//         });
//     }
// }

// Name = 'Javascript';
// Name2 = 'PHP';
// options = `Course Name: ${Name}, ${Name2}`;

// console.log(options);

// var line = `Line 1
// Line 2
// Line 3`

// console.log(line);

// const course = {
//     name: 'Javascript basic!',
//     getName: () => this
// }

// console.log(course.getName());

// Class
// class Course {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
// }

// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     getName() { return this.name; }
//     setName(name) { this.name = name; }
//     getPrice() { return this.price; }
//     setPrice(price) { this.price = price; }
// }



// console.log(new Product('Macbook Pro', 5000));

//Enhanced object literals
// var name = 'Javascript';
// var price = 5000;

// var course = {
//     name,
//     price,
//     getName() { return name;}
// }

// console.log(course.getName());

// Default parameter
// var multify = (a = 2, b = 5) => a * b;

// console.log(multify(4));

//Enhanced object literals
// var a = 1, b =2, c = 3, d = 4;
// var myObj = {
//     a, b, c,
// };
// console.log(myObj.a);

//Destructuring, Rest
// var myArray = [1, 2, 3];

// var [a, ...rest] = myArray;

// console.log(rest);
//Traditional
// function myFunc(param){
//     param(123);
// }

// function myCallBack(value){
//     console.log("value: ", value);
// }
// //ES6

// var myArrowFunction = (param) => {
//     if (typeof param === "function"){
//         param('Hoc lap trinh');
//     }else {
//         alert('Your variable is wrong!');
//     }
    
// }


// var myCallBack = (value) => {console.log("value: ", value);}

// myArrowFunction(123);


//Rest

// var logger = ({name, price}) => {
//     console.log('Name: ' ,name);
//     console.log('Price: ', price);    
// }

// var myObj = {
//     name: 'Javascript',
//     price: 1000,
//     description: 'This is a description of Javascript course!',
//     type: 'Basic'
// }

// logger({
//     name: 'Javascript',
//     price: 1000
// })

// // Template literals
// const firstName = 'Le Chieu';
// const lastName = 'Duong';

// const fullName = `My name is: ${firstName} ${lastName}`;

// //console.log(fullName);

// // Multi-line string
// const lines = `Line 1
// Line 2
// Line 3
// `;

// //console.log(lines);

// // Arrow function
// // 1 .Decration function
// // function logger(log) {
// //     console.log(log);
// // }

// //logger('Message...')

// //2. Expression function 
// var logger1 = function(log){
//     console.log(log);
// }

// // 3. Arrow function
// //Trường hợp không phải return
// var logger2 = (log) => {
//     console.log(log);
// }
// //Trường hợp là return
// //Không ngoặc 
// var sum1 = (a, b) => a + b;

// var myObj = (a, b) => ({ 
//     a: a,
//     b: b,
// });

// var logger4  = log => console.log(log);

// //Có ngoặc
// var sum = (a, b) => {
//     return a + b;
// }

// // Arrow function sẽ không có context
// const myCourse = {
//     name: 'Javascript',
//     getName: function() {
//         return this;
//     },// Context

//     getName1: () => {
//         return this;
//     }
// }

// //Arrow function không thể sử dụng làm function constructor

// const NewCourse = function(name, price){ 
//     this.name = name;
//     this.price = price;
// }

// //Classes 
// class Student {
//     constructor(name, price) { 
//         this.name = name;
//         this.price = price;
//     }

//     getName() {
//         return this.name;
//     }

//     getPrice() {
//         return this.price;
//     }
// }

// //Rest
// /* Khi không có phần tử cần lấy ra nào thì mặc định sẽ lấy ra toàn bộ 
// phần tử trong mảng */
// // VD:
// // function notice (a, b, ...params){
// //     console.log(params);
// // }
// // notice2 ({
// //     name: 'Javascript',
// //     price: 1000,
// //     description: 'Description'
// // });

// // function notice2 ({name, price}){
// //     console.log(name, price);
// // }

// //Spead 
// // Array
// var array1 = ['Javascript', 'Ruby', 'PHP'];

// var array2 = ['Java', 'Dart', 'C++'];

// var array3 = [...array1, ...array2];

// //console.log(array3);

// //Object
// var myObj1 = {
//     name: 'Javascript',
//     price: 1000
// }

// var myObj2 = {
//     name: 'Ruby',
//     price: 1200
// }

// var myObj3 = {
//     ...myObj1,
//     ...myObj2,
// }

// var defaultConfig = {
//     api: 'https://domain-trang-khoa-hoc',
//     apiVersion: 'v1',
//     other: 'other'
// }

// var exerciseConfig = {
//     ...defaultConfig,
//     api: 'https://domain-trang-bai-tap'
// }

// //console.log(exerciseConfig);

// var myArray = ['Javascript', 'C++', 'C#', 'Redis']

// function myTestArray (...rest) {
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i]);
//     }
// }

// //Tagged template literals
// // function hightlight(...rest) {
// //     console.log(rest);
// // } 

// function hightlight ([first, ...strings], ...values) {
//     // console.log('first: ', first);
//     // console.log('strings: ', strings);
//     // console.log('values:' , values);

//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//     ).join('');
// }

// var brand = 'D9';
// var yourCourse = 'Javascript';
// var price = 'USD';

// const html = hightlight `Learn programing ${yourCourse} from ${brand}${price}`;
// //console.log(html);

// //Modules

// import logger from './logger.js';

// import * as constants from './constants.js'

// //console.log(constants);

// //logger('Test message...', TYPE_ERROR);

// // Optional chainings (?.)


