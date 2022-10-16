<script >
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import FormInput from '@/Layouts/FormInput.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

export default {
    components: {
        AuthenticatedLayout,
        FormInput,
        InputError,
        InputLabel,
        TextInput,
        PrimaryButton,
        Head,
    },
    setup(props) {
        const form = useForm({
            name: '',
            username: '',
            email: '',
        });
        return { form };
    },
    methods: {
        submit() {
            this.form.put(route("profile.update", this.post.id));
        },
    },
};
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight" style="text-align:center">
                Profile Update
            </h2>
        </template>
        <FormInput>

            <form @submit.prevent="submit">
                <div>
                    <InputLabel for="name" value="Name" />
                    <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" :placeholder="$page.props.auth.user.name" />
                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div>
                    <InputLabel for="username" value="Username" />
                    <TextInput id="username" type="text" class="mt-1 block w-full" v-model="form.username"  :placeholder="$page.props.auth.user.username"/>
                    <InputError class="mt-2" :message="form.errors.username" />
                </div>

                <div >
                    <InputLabel for="email" value="Email" />
                    <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username" :placeholder="$page.props.auth.user.email"/>
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>
                <div class="flex items-center justify-end mt-4">
                    <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Update
                    </PrimaryButton>
                </div>
            </form>
        </FormInput>
    </AuthenticatedLayout>
</template>

