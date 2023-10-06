<template>
    <div class="custom-footer-container">
        <b-row>
            <b-col lg="3">
                <img class="mt-2" src="@/assets/img/logo.svg" width="200px">
            </b-col>
            <b-col lg="3">
                <h5 class="text-light mt-4"><b>Contact Us</b></h5>
                <p class="text-light mt-4">Phone : <a class="text-light" href="tel:254727411138">254 727 411 138</a>, <a class="text-light" href="tel:+254 701 969007">+254 701 969007</a></p>
                <p class="text-light mt-2">Email : <a class="text-light" href="mailto:info@suluhutech.com">info@suluhutech.com</a></p>
            </b-col>

            <b-col lg="3">
                <h5 class="text-light mt-4"><b>Social Media</b></h5>
                <font-awesome-icon class="text-light mt-4" :icon="['fab', 'twitter']" size="xl"/>
                <font-awesome-icon class="text-light mt-4 px-4" :icon="['fab', 'facebook']" size="xl"/>
                <font-awesome-icon class="text-light mt-4" :icon="['fab', 'linkedin']" size="xl"/>
            </b-col>

            <b-col lg="3">
                <h5 class="text-light mt-4"><b>Navigation</b></h5>
                <ul>
                    <li class="text-light">Why Us</li>
                    <li class="text-light">Products</li>
                    <li class="text-light">About Us</li>
                    <li class="text-light">Industries</li>
                    <li class="text-light">Blogs</li>
                </ul>
            </b-col>
        </b-row>
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