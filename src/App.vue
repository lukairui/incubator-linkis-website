<script setup>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import {ref} from "vue";
    import systemConfiguration from "./js/config";
    let isNavActive = ref(false);

    // 初始化语言
    const lang = ref(localStorage.getItem('locale'));

    // 切换语言
    const switchLang = (lang) => {
        localStorage.setItem('locale', lang);
        location.reload();
    }

    var ticking = false;
    
    function onScroll(){
        if(!ticking) {
            requestAnimationFrame(scrollFunc);
            ticking = true;
        }
    }

    function scrollFunc(){
        const dist = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (dist > 54) {
            isNavActive.value = true;
        } else {
            isNavActive.value = false;
        }
        ticking = false;
    }
    // 滚动事件监听
    window.addEventListener('scroll', onScroll, false);
</script>

<template>
    <div id="appCtn">
        <nav class="nav" :class="{ active: isNavActive }">
            <div class="ctn-block">
                <router-link to="/" class="nav-logo">
                    <img class="logo" src="/src/assets/logo.png" alt="linkis">
                    <span>Apache Linkis</span>
                </router-link>
                <span class="nav-logo-badge">Incubating</span>
                <div class="menu-list">
                    <router-link class="menu-item" to="/"><span class="label">{{$t('menu.item.home')}}</span></router-link>
                    <router-link class="menu-item" to="/docs/introduction/index"><span class="label">{{$t('menu.item.docs')}}</span></router-link>
                    <router-link class="menu-item" to="/faq/index"><span class="label">{{$t('menu.item.faq')}}</span></router-link>
                    <router-link class="menu-item" to="/download"><span class="label">{{$t('menu.item.download')}}</span></router-link>
<!--                <router-link class="menu-item" to="/blog"><span class="label">{{$t('menu.item.blog')}}</span></router-link>-->
                    <router-link class="menu-item" to="/team"><span class="label">{{$t('menu.item.team')}}</span></router-link>
                    <div class="menu-item language">
                        {{ lang === 'zh-CN' ? '简体中文' : 'English'}}
                        <div class="dropdown-menu">
                            <ul class="dropdown-menu-ctn">
                                <li class="dropdown-menu-item" :class="{active: lang === 'zh-CN'}" @click="switchLang('zh-CN')">简体中文</li>
                                <li class="dropdown-menu-item" :class="{active: lang === 'en'}" @click="switchLang('en')">English</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="app-content">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="ctn-block">
                <div class="footer-links-row">
                    <div class="footer-links">
                        <h3 class="links-title">Linkis</h3>
                        <a href="/#/docs/introduction/index" class="links-item">{{$t('menu.links.documentation')}}</a>
                        <!--<a href="/#/blog" class="links-item">{{$t('menu.links.events')}}</a>-->
                        <a href="/#/faq/index" class="links-item">FAQ</a>
                        <a :href="systemConfiguration.github.projectReleaseUrl"  target="_blank" class="links-item">{{$t('menu.links.releases')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                    </div>
                    <div class="footer-links">
                        <h3 class="links-title">{{$t('menu.links.community')}}</h3>
                        <a :href="systemConfiguration.github.projectUrl" target="_blank" class="links-item">GitHub <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        <a :href="systemConfiguration.github.projectIssueUrl" target="_blank" class="links-item">{{$t('menu.links.issueTracker')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        <a :href="systemConfiguration.github.projectPrUrl"  target="_blank" class="links-item">{{$t('menu.links.pullRequests')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                    </div>
                    <div class="footer-links">
                        <h3 class="links-title">{{$t('menu.links.asf')}}</h3>
                        <a href="https://www.apache.org/" target="_blank" class="links-item">{{$t('menu.links.foundation')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        <a href="https://www.apache.org/licenses/" target="_blank" class="links-item">{{$t('menu.links.license')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        <a href="https://www.apache.org/foundation/sponsorship.html" target="_blank" class="links-item">{{$t('menu.links.sponsorship')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                        <a href="http://www.apache.org/foundation/thanks.html" target="_blank" class="links-item">{{$t('menu.links.thanks')}} <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_3J9K"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                    </div>
                </div>
                <img src="/src/assets/image/incubator-logo.png" alt="incubator-logo" class="incubator-logo">
                <p class="footer-desc">Apache Linkis (Incubating) is an effort undergoing incubation at The Apache
                    Software Foundation, sponsored by the Apache Incubator. Incubation is required of all newly accepted
                    projects until a further review indicates that the infrastructure, communications, and decision
                    making process have stabilized in a manner consistent with other successful ASF projects. While
                    incubation status is not necessarily a reflection of the completeness or stability of the code, it
                    does indicate that the project has yet to be fully endorsed by the ASF.</p>
                <p class="footer-desc text-center">Copyright © 2021 The Apache Software Foundation. Apache Linkis,
                    Apache Incubator, Linkis, Apache, the Apache feather logo, the Apache<br>Linkis logo and the Apache
                    Incubator project logo are trademarks of The Apache Software Foundation.</p>
            </div>
        </footer>
    </div>
</template>

<style lang="less">
    @import url('/src/style/base.less');

    .nav {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        font-size: 16px;
        color: @enhance-color;

        &.active {
            background: #fff;
            box-shadow: 0 2px 12px rgba(15, 18, 34, 0.1);
        }

        .ctn-block {
            display: flex;
            align-items: center;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            line-height: 54px;
            font-weight: 500;
            .logo{
                height: 24px;
                margin-right: 10px;
            }
        }

        .nav-logo-badge {
            display: inline-block;
            margin-left: 4px;
            padding: 0 8px;
            line-height: 24px;
            background: #d7e3fc;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
        }

        .menu-list {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            .menu-item {
                margin-left: 16px;
                margin-right: 16px;
                line-height: 52px;
                border-bottom: 2px solid transparent;
                transition: all ease .2s;
                cursor: pointer;
                user-select: none;

                &:hover,
                &.router-link-active,
                &.router-link-exact-active {
                    .label {
                        color: @active-color;
                    }

                    border-color: @active-color;
                }

                &.language {
                    position: relative;

                    &::after {
                        content: '';
                        display: inline-block;
                        vertical-align: middle;
                        width: 0;
                        height: 0;
                        margin-left: 8px;
                        border-bottom: 6px solid #ccc;
                        border-left: 4px solid transparent;
                        border-right: 4px solid transparent;
                        transition: all ease .2s;
                    }

                    &:hover {
                        &::after {
                            transform: rotate(180deg);
                        }

                        .dropdown-menu {
                            display: block;
                        }
                    }

                    .dropdown-menu {
                        display: none;
                        position: absolute;
                        z-index: 10;
                        top: 20px;
                        left: 0;
                        padding-top: 40px;

                        .dropdown-menu-ctn {
                            padding: 10px 0;
                            background: #fff;
                            border-radius: 4px;
                            border: 1px solid #FFFFFF;
                            box-shadow: 0 2px 12px 0 rgba(15, 18, 34, 0.10);

                            .dropdown-menu-item {
                                font-size: 14px;
                                line-height: 32px;
                                padding: 0 16px;
                                cursor: pointer;
                                white-space: nowrap;
                                &.active,
                                &:hover {
                                    color: @active-color;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .app-content {
        padding-top: 54px;
    }

    .footer {
        padding-top: 40px;
        background: #F9FAFB;

        .incubator-logo {
            height: 44px;
            margin-left: 20px;
            margin-bottom: 20px;
        }

        .footer-desc {
            padding: 0 20px 30px;
            color: #999999;
            font-weight: 400;
        }

        .footer-links-row {
            display: flex;
            font-size: 16px;

            .footer-links {
                flex: 1;
                padding: 20px;

                .links-title {
                    margin-bottom: 16px;
                }

                .links-item {
                    display: block;
                    margin-bottom: 10px;
                    color: rgba(15, 18, 34, 0.65);

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>
