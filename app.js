const UIController = (function () {
    function addMicrosoft() {
        let newItemDiv = document.createElement("div");
        newItemDiv.classList = "size-adjust";
        newItemDiv.id = "microsoft-content";
        newItemDiv.innerHTML = `
        <div class="microsoft">
            <div class="container-user">
                <div class="opacity"></div>
            </div>
        </div>

        <div class="microsoft-slogan">
            <h1 class="font-size">MICROSOFT</h1>
        </div>

        <div class="microsoft-line">
            <div class="progress">
                <div class="progress-bar bg-success" style="width:100%"></div>
            </div>
        </div>

        <div class="windows-background">
            <div class="container-user">
                <div class="opacity-background"></div>
            </div>
        </div>

        <div class="body-content-windows">
            <h1 class="windows-heading">WINDOWS</h1>
            <div class="windows-content">
                <div class="windows">
                    <img src="./Picture/2832e3d9f99c1a5aea7524e315ca4a35.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/17EGZfFn12kP2Bd2QRxqZ-5PIrgokO65S/view"
                            class="btn btn-primary btn-windows">Windows XP SP3 32bit</a>
                        <a href="https://drive.google.com/file/d/1WUEyvCB8x8DYpxc8sS8CYnt-pKConxp1/view"
                            class="btn btn-primary btn-windows">Windows XP SP3 64bit</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/Windows-7-Professional-Free-Download.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1hAl4Rt9x4una_mp0WocxN5IRtVxY7PRl/view"
                            class="btn btn-primary btn-windows">Windows 7 32bit</a>
                        <a href="https://drive.google.com/file/d/1nWTAfVgZ3svcaSEY4HlNUNvAh6upZiEi/view"
                            class="btn btn-primary btn-windows">Windows 7 64bit</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/windows-81.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1mS1qji_1puw-JTF1sg89d1anBJcexip3/view"
                            class="btn btn-primary btn-windows">Windows 8.1 32bit</a>
                        <a href="https://www.fshare.vn/file/REFNPB7RW29T?token=1643689570"
                            class="btn btn-primary btn-windows">Windows 8.1 64bit</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/windows-10-logo (2).jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1ItxINYlz0srbKa1Zk-fnZRtrF97nj4qG/view"
                            class="btn btn-primary btn-windows">Windows 10 20H2</a>
                        <a href="https://drive.google.com/file/d/1619AwR79EJXaUPazuX1GZrYyGFJ6_Qda/view"
                            class="btn btn-primary btn-windows">Windows 10 18H2 LTSC</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/Win11B2.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1jxmX0VYNccUPOcjXgpfofeQhd_IitVKo/view"
                            class="btn btn-primary btn-windows">Windows 11</a>
                        <a href="https://drive.google.com/file/d/1Te9SYewBMhkHNo9XylPOwkX_iRUT41q8/view"
                            class="btn btn-primary btn-windows">Windows 11 Bypass 347</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="office-background">
            <div class="container-user">
                <div class="opacity-background"></div>
            </div>
        </div>
        
        <div class="microsoft-second-line">
            <div class="progress">
                <div class="progress-bar bg-success" style="width:100%"></div>
            </div>
        </div>

        <div class="body-content-office">
            <h1 class="windows-heading">OFFICE</h1>
            <div class="office-content">
                <div class="windows">
                    <img src="./Picture/dia-cd-microsoft-office-2003-full-1m4G3-dZfdq3_simg_ab1f47_350x350_maxb.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1wuBAhNjTay8mCu-xWxE62tqk8MGxmWer/view"
                            class="btn btn-primary btn-windows">Microsoft Office 2003</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/microsoft_office_2007_disc.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1_lpILYH73MVhDDVYHxd02SAd6_iMpV2h/view"
                            class="btn btn-primary btn-windows">Microsoft Office 2007</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/Microsoft-Office-2010-Professional-Plus.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/15yk8bkDH7qdrfiNsPDrf-4RLKno-n11f/view"
                            class="btn btn-primary btn-windows">Microsoft Office 2010</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/office-2016.png" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/13jpLC_WET4cYmZh-iaX1QcRZVjZYebKq/view"
                            class="btn btn-primary btn-windows">Microsoft Office 2016</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/office_pro_plus_2019.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1oedGCdh7cSY8OsGaErEZVQNsa2REHuno/view"
                            class="btn btn-primary btn-windows">Microsoft Office 2019</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/key-office-2021-pro-plus.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/177jAmH_uJ0O1SlNkkUmNEg9Vtlod64oM/view?usp=sharing"
                            class="btn btn-primary btn-windows">Microsoft Office 2021</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="microsoft-third-line">
            <div class="progress">
                <div class="progress-bar bg-success" style="width:100%"></div>
            </div>
        </div>
        
        <footer class="microsoft-copyright bg-primary">
            <p class="text-white text-center text-size">©Bản Quyền Của <span class="text-info">Lê Thành Lân</span>. 
                Được Thực Hiện Bằng <span class="text-warning">Bootstrap 5</span>, 
                <span class="text-warning">HTML</span>, <span class="text-warning">CSS</span>, 
                <span class="text-warning">Javascript</span>
            </p>
        </footer>`;
        document.querySelector("#home-content").classList.add("d-none");
        if (document.querySelector("#windows-content") != null) {
            document.querySelector("#windows-content").classList.add("d-none");
        }
        if (document.querySelector("#office-content") != null) {
            document.querySelector("#office-content").classList.add("d-none");
        }
        document.querySelector("body").appendChild(newItemDiv);
    }
    function addWindows() {
        let newItemDiv = document.createElement("div");
        newItemDiv.classList = "size-adjust";
        newItemDiv.id = "windows-content";
        newItemDiv.innerHTML = `<div class="microsoft">
            <div class="container-user">
                <div class="opacity"></div>
            </div>
        </div>

        <div class="microsoft-slogan">
            <h1 class="font-size">MICROSOFT</h1>
        </div>

        <div class="microsoft-line">
            <div class="progress">
                <div class="progress-bar bg-success" style="width:100%"></div>
            </div>
        </div>

        <div class="windows-background">
            <div class="container-user">
                <div class="opacity-background"></div>
            </div>
        </div>

        <div class="body-content-windows">
            <h1 class="windows-heading">WINDOWS</h1>
            <div class="windows-content">
                <div class="windows">
                    <img src="./Picture/2832e3d9f99c1a5aea7524e315ca4a35.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/17EGZfFn12kP2Bd2QRxqZ-5PIrgokO65S/view"
                            class="btn btn-primary btn-windows">Windows XP SP3 32bit</a>
                        <a href="https://drive.google.com/file/d/1WUEyvCB8x8DYpxc8sS8CYnt-pKConxp1/view"
                            class="btn btn-primary btn-windows">Windows XP SP3 64bit</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/Windows-7-Professional-Free-Download.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1hAl4Rt9x4una_mp0WocxN5IRtVxY7PRl/view"
                            class="btn btn-primary btn-windows">Windows 7 32bit</a>
                        <a href="https://drive.google.com/file/d/1nWTAfVgZ3svcaSEY4HlNUNvAh6upZiEi/view"
                            class="btn btn-primary btn-windows">Windows 7 64bit</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/windows-81.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1mS1qji_1puw-JTF1sg89d1anBJcexip3/view"
                            class="btn btn-primary btn-windows">Windows 8.1 32bit</a>
                        <a href="https://www.fshare.vn/file/REFNPB7RW29T?token=1643689570"
                            class="btn btn-primary btn-windows">Windows 8.1 64bit</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/windows-10-logo (2).jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1ItxINYlz0srbKa1Zk-fnZRtrF97nj4qG/view"
                            class="btn btn-primary btn-windows">Windows 10 20H2</a>
                        <a href="https://drive.google.com/file/d/1619AwR79EJXaUPazuX1GZrYyGFJ6_Qda/view"
                            class="btn btn-primary btn-windows">Windows 10 18H2 LTSC</a>
                    </div>
                </div>
                <div class="windows">
                    <img src="./Picture/Win11B2.jpg" class="image">
                    <div class="link-button">
                        <a href="https://drive.google.com/file/d/1jxmX0VYNccUPOcjXgpfofeQhd_IitVKo/view"
                            class="btn btn-primary btn-windows">Windows 11</a>
                        <a href="https://drive.google.com/file/d/1Te9SYewBMhkHNo9XylPOwkX_iRUT41q8/view"
                            class="btn btn-primary btn-windows">Windows 11 Bypass 347</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="windows-second-line">
            <div class="progress">
                <div class="progress-bar bg-success" style="width:100%"></div>
            </div>
        </div>

        <footer class="windows-copyright bg-primary">
            <p class="text-white text-center text-size">©Bản Quyền Của <span class="text-info">Lê Thành Lân</span>. 
                Được Thực Hiện Bằng <span class="text-warning">Bootstrap 5</span>, 
                <span class="text-warning">HTML</span>, <span class="text-warning">CSS</span>, 
                <span class="text-warning">Javascript</span>
            </p>
        </footer>`;
        document.querySelector("#home-content").classList.add("d-none");
        if (document.querySelector("#microsoft-content") != null) {
            document.querySelector("#microsoft-content").classList.add("d-none");
        }
        if (document.querySelector("office-content") != null) {
            document.querySelector("#office-content").classList.add("d-none");
        }
        document.querySelector("body").appendChild(newItemDiv);
    }

    function addOffice() {
        let newItemDiv = document.createElement("div");
        newItemDiv.classList = "size-adjust";
        newItemDiv.id = "office-content";
        newItemDiv.innerHTML = `
        <div class="microsoft">
            <div class="container-user">
                <div class="opacity"></div>
            </div>
        </div>

        <div class="microsoft-slogan">
            <h1 class="font-size">MICROSOFT</h1>
        </div>
        
        <div class="office-background office-background-position">
        <div class="container-user">
            <div class="opacity-background"></div>
        </div>
    </div>
    
    <div class="microsoft-second-line office-line-position">
        <div class="progress">
            <div class="progress-bar bg-success" style="width:100%"></div>
        </div>
    </div>

    <div class="body-content-office office-body-position">
        <h1 class="windows-heading">OFFICE</h1>
        <div class="office-content">
            <div class="windows">
                <img src="./Picture/dia-cd-microsoft-office-2003-full-1m4G3-dZfdq3_simg_ab1f47_350x350_maxb.jpg" class="image">
                <div class="link-button">
                    <a href="https://drive.google.com/file/d/1wuBAhNjTay8mCu-xWxE62tqk8MGxmWer/view"
                        class="btn btn-primary btn-windows">Microsoft Office 2003</a>
                </div>
            </div>
            <div class="windows">
                <img src="./Picture/microsoft_office_2007_disc.jpg" class="image">
                <div class="link-button">
                    <a href="https://drive.google.com/file/d/1_lpILYH73MVhDDVYHxd02SAd6_iMpV2h/view"
                        class="btn btn-primary btn-windows">Microsoft Office 2007</a>
                </div>
            </div>
            <div class="windows">
                <img src="./Picture/Microsoft-Office-2010-Professional-Plus.jpg" class="image">
                <div class="link-button">
                    <a href="https://drive.google.com/file/d/15yk8bkDH7qdrfiNsPDrf-4RLKno-n11f/view"
                        class="btn btn-primary btn-windows">Microsoft Office 2010</a>
                </div>
            </div>
            <div class="windows">
                <img src="./Picture/office-2016.png" class="image">
                <div class="link-button">
                    <a href="https://drive.google.com/file/d/13jpLC_WET4cYmZh-iaX1QcRZVjZYebKq/view"
                        class="btn btn-primary btn-windows">Microsoft Office 2016</a>
                </div>
            </div>
            <div class="windows">
                <img src="./Picture/office_pro_plus_2019.jpg" class="image">
                <div class="link-button">
                    <a href="https://drive.google.com/file/d/1oedGCdh7cSY8OsGaErEZVQNsa2REHuno/view"
                        class="btn btn-primary btn-windows">Microsoft Office 2019</a>
                </div>
            </div>
            <div class="windows">
                <img src="./Picture/key-office-2021-pro-plus.jpg" class="image">
                <div class="link-button">
                    <a href="https://drive.google.com/file/d/177jAmH_uJ0O1SlNkkUmNEg9Vtlod64oM/view?usp=sharing"
                        class="btn btn-primary btn-windows">Microsoft Office 2021</a>
                </div>
            </div>
        </div>
    </div>
    <div class="office-second-line">
            <div class="progress">
                <div class="progress-bar bg-success" style="width:100%"></div>
            </div>
        </div>

        <footer class="office-copyright bg-primary">
            <p class="text-white text-center text-size">©Bản Quyền Của <span class="text-info">Lê Thành Lân</span>. 
                Được Thực Hiện Bằng <span class="text-warning">Bootstrap 5</span>, 
                <span class="text-warning">HTML</span>, <span class="text-warning">CSS</span>, 
                <span class="text-warning">Javascript</span>
            </p>
        </footer>`;
        document.querySelector("#home-content").classList.add("d-none");
        if (document.querySelector("#microsoft-content") != null) {
            document.querySelector("#microsoft-content").classList.add("d-none");
        }
        if (document.querySelector("#windows-content") != null) {
            document.querySelector("#windows-content").classList.add("d-none");
        }
        document.querySelector("body").appendChild(newItemDiv);
    }
    return {
        addMicrosoft, addWindows, addOffice,
    };
})();

const App = (function () {
    function init() {
        document.querySelector('#collapsibleNavbar').addEventListener('click', event => {
            event.preventDefault();
            console.log(event.target.className);
            if (event.target.classList.contains("nav-link-home")) {
                document.querySelector("#home-content").classList.remove("d-none");
                if (document.querySelector("#microsoft-content") != null) {
                    document.querySelector("#microsoft-content").classList.add("d-none");
                }
                if (document.querySelector("#windows-content") != null) {
                    document.querySelector("#windows-content").classList.add("d-none");
                }
                if (document.querySelector("#office-content") != null) {
                    document.querySelector("#office-content").classList.add("d-none");
                }
            } if (event.target.classList.contains("nav-link-microsoft")) {
                if (document.querySelector("#microsoft-content") != null) {
                    document.querySelector("#home-content").classList.add("d-none");
                    document.querySelector("#microsoft-content").classList.remove("d-none");
                    if (document.querySelector("#windows-content") != null) {
                        document.querySelector("#windows-content").classList.add("d-none");
                    }
                    if (document.querySelector("#office-content") != null) {
                        document.querySelector("#office-content").classList.add("d-none");
                    }
                } else {
                    UIController.addMicrosoft();
                }
            } if (event.target.classList.contains("nav-link-windows")) {
                if (document.querySelector("#windows-content") != null) {
                    document.querySelector("#home-content").classList.add("d-none");
                    document.querySelector("#windows-content").classList.remove("d-none");
                    if (document.querySelector("#microsoft-content") != null) {
                        document.querySelector("#microsoft-content").classList.add("d-none");
                    }
                    if (document.querySelector("#office-content") != null) {
                        document.querySelector("#office-content").classList.add("d-none");
                    }
                } else {
                    UIController.addWindows();
                }
            } if (event.target.classList.contains("nav-link-office")) {
                if (document.querySelector("#office-content") != null) {
                    document.querySelector("#home-content").classList.add("d-none");
                    if (document.querySelector("#windows-content") != null) {
                        document.querySelector("#windows-content").classList.add("d-none");
                    }
                    if (document.querySelector("#microsoft-content") != null) {
                        document.querySelector("#microsoft-content").classList.add("d-none");
                    }
                    document.querySelector("#office-content").classList.remove("d-none");
                } else {
                    UIController.addOffice();
                }
            }
        });
        document.querySelector('.body-content').addEventListener('click', event => {
            event.preventDefault();
            if (event.target.classList.contains("nav-link-windows")) {
                if (document.querySelector("#windows-content") != null) {
                    document.querySelector("#home-content").classList.add("d-none");
                    document.querySelector("#windows-content").classList.remove("d-none");
                    if (document.querySelector("#microsoft-content") != null) {
                        document.querySelector("#microsoft-content").classList.add("d-none");
                    }
                    if (document.querySelector("#office-content") != null) {
                        document.querySelector("#office-content").classList.add("d-none");
                    }
                } else {
                    UIController.addWindows();
                }
            } if (event.target.classList.contains("nav-link-office")) {
                if (document.querySelector("#office-content") != null) {
                    document.querySelector("#home-content").classList.add("d-none");
                    if (document.querySelector("#windows-content") != null) {
                        document.querySelector("#windows-content").classList.add("d-none");
                    }
                    if (document.querySelector("#microsoft-content") != null) {
                        document.querySelector("#microsoft-content").classList.add("d-none");
                    }
                    document.querySelector("#office-content").classList.remove("d-none");
                } else {
                    UIController.addOffice();
                }
            }
        });
    }
    return {
        init,
    };
})();

window.addEventListener("DOMContentLoaded", App.init);