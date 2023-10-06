<template>
    <div class="custom-navbar-container">
        <b-navbar class="custom-navbar py-4" toggleable="lg">
            <b-navbar-brand href="#">
                <img src="../assets/img/logo.svg" alt="Suluhu Logo" height="30px">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="custom-navbar-nav" justified>
                    <b-nav-item class="px-2 custom-nav-text" href="#">Why us</b-nav-item>
                    <b-nav-item class="px-2 custom-nav-text" href="#">Products</b-nav-item>
                    <b-nav-item class="px-2 custom-nav-text" href="#">About</b-nav-item>
                    <b-nav-item class="px-2 custom-nav-text" href="#">Industries</b-nav-item>
                    <b-nav-item class="px-2 custom-nav-text" href="#">Blogs</b-nav-item>
                    <b-nav-item class="custom-nav-text" href="#"></b-nav-item>
                    <b-button class="custom-white-button" variant="light">Partner with us</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'TopNavComponent',
    components: {
        //
    }
}
</script>