
<template>
    <Head title="Gallery" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800" style="text-align:center">
                Post
            </h2>
        </template>


        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-500">
                        <div class="mb-5 container">
                            <div class="center" style="text-align:center;">
                                <Link
                                    class="
                                        px-6
                                        py-2
                                        mb-2
                                        text-green-100
                                        bg-green-500
                                        rounded
                                    " :href="route('images.create')"> + Posts Gallery
                                </Link>
                            </div>

                        </div>

                        <table class="center" style="margin-left: auto; margin-right: auto;">
                            <thead class="font-bold bg-gray-300 border-b-3">
                                <td class="px-4 py-2">ID</td>
                                <td class="px-4 py-2">Title</td>
                                <td class="px-4 py-2">Tanggal</td>
                                <td class="px-4 py-2">Image</td>
                                <td class="px-4 py-2">Action</td>
                            </thead>
                            <tbody>
                                <tr v-for="image in images.data" :key="images.id">
                                    <td class="px-4 py-2 ">{{ image.id }}</td>
                                    <td class="px-4 py-2">{{ image.title }}</td>
                                    <td class="px-4 py-2">{{ image.created_at  }}</td>
                                    <td class="px-4 py-2">
                                        <img :src="image.file" width="200" />
                                    </td>
                                    <td class="px-4 py-2 font-extrabold">
                                        <Link
                                            @click="destroy(image.id)"
                                            class="text-red-700"
                                            >Delete</Link
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <pagination :links="images.links" />
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BreezeNavLink from "@/Components/NavLink.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { Link } from "@inertiajs/inertia-vue3";


export default {

    components: {
        BreezeAuthenticatedLayout,
        Head,
        BreezeNavLink,
        Link,
    },
    props: {
        images: Object,
    },
    methods: {
        destroy(id) {
            this.$inertia.delete(route("images.destroy", id));
        },
    },
};

</script>
