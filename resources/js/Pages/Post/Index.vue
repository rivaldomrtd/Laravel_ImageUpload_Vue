
<template>
    <Head title="Artikel" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800" style="text-align:center">
                Post
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">

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
                                    " :href="route('posts.create')"> + Posts Gallery
                                </Link>
                            </div>
                        </div>
                        <table class="center" style="margin-left: auto; margin-right: auto;">
                            <thead class="font-bold bg-gray-300 border-b-2">
                                <td class="px-4 py-2">ID</td>
                                <td class="px-4 py-2">Title</td>
                                <td class="px-4 py-2">Tanggal</td>
                                <td class="px-4 py-2">Description</td>
                                <td class="px-4 py-2">Action</td>
                            </thead>
                            <tbody>
                                <tr v-for="post in posts.data" :key="post.id">
                                    <td class="px-4 py-2">{{ post.id }}</td>
                                    <td class="px-4 py-2">{{ truncateText(post.title) }}</td>
                                    <td class="px-4 py-2">{{ post.created_at  }}</td>
                                    <td class="px-4 py-2">{{ truncateText(post.description)  }}</td>
                                    <td class="px-4 py-2 font-extrabold">
                                        <Link
                                            class="text-green-700"
                                            :href="route('posts.edit', post.id)"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            @click="destroy(post.id)"
                                            class="text-red-700"
                                            >Delete</Link
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <pagination :links="posts.links" />
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
        posts: Object,
    },
    methods: {
        truncateText(text) {
            if (text.length > 30) {
                return `${text.substr(0, 30)}...`;
            }
            return text;
        },
        destroy(id) {
            this.$inertia.delete(route("posts.destroy", id));
        },
    },
};

</script>
