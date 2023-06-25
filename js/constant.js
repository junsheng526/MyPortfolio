//DECLARE SOME VARIABLES
var person = {
    name: 'Your Name',
    slogan: '"Transforming Ideas into Captivating Visual Experiences"',
    title: 'Web Developer',
    firstDesc: 'With a strong foundation in both traditional and digital design, \
    I bring a fresh and innovative approach to every project I undertake. \
    My goal is to create designs that not only communicate a message \
    effectively but also evoke emotions and leave a lasting impression.',
    aboutDesc: 'Hello there! I\'m Emily Johnson, a passionate graphic designer with over 8 years of experience in the industry. \
    Design has always been my true calling, and I find joy in creating visually stunning and impactful designs \
    that leave a lasting impression. \
    \n\nI earned my Bachelor\'s degree in Graphic Design from XYZ University, where I honed my skills in various \
    design disciplines. Throughout my career, I have developed expertise in branding, logo design, and print \
    collateral. I am also well-versed in digital design, including UI/UX design and illustration. My design \
    approach is rooted in simplicity, effective communication, and a keen eye for detail.',
    // Add more details as needed
};

//NAVIGATION BAR SECTION
document.getElementById('logoName').textContent = person.name;
var logoImage = document.getElementById('logoImage');
logoImage.setAttribute('src', '/images/moon.png');

//HOME SECTION
document.getElementById('firstSectionName').textContent = person.name;
document.getElementById('slogan').textContent = person.slogan;
document.getElementById('firstDesc').textContent = person.firstDesc;
// var homeProfileImage = document.getElementById('homeProfileImage');
// homeProfileImage.setAttribute('src', 'path/to/your/image.jpg');

//ABOUT SECTION
document.getElementById('aboutDesc').textContent = person.aboutDesc;
// var aboutProfileImage = document.getElementById('homeProfileImage');
// aboutProfileImage.setAttribute('src', 'path/to/your/image.jpg');

//SKILLS SECTION
// var skillImages = document.querySelectorAll('.skillImages');

// var skillPhotoUrls = {
//     img1: 'path/to/john-image.jpg',
//     img2: 'path/to/jane-image.jpg',
//     img3: 'path/to/mike-image.jpg',
//     img4: '',
//     img5: '',
// };

// skillImages.forEach(function (image) {
//     var skill = image.getAttribute('data-image');
//     image.setAttribute('src', skillPhotoUrls[skill]);
// });

//PORTFOLIO SECTION


