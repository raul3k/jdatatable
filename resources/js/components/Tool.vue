<template>
    <div dusk="applications-detail-component" class="mb-8" :updateKey="updateKey">
        <div>
            <div>
                <div class="relative" dusk="{{SOME_DEL_LINK_TO_BE_CONFIGURED}}-index-component" data-relationship="{{CONFIGURABLE_RELATION}}">
                    <h1 class="mb-3 text-90 font-normal text-2xl">{{heading}}</h1>
                    <div class="flex" style="">
                        <div class="relative h-9 flex-no-shrink mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                 aria-labelledby="search" role="presentation"
                                 class="fill-current absolute search-icon-center ml-3 text-70">
                                <path fill-rule="nonzero"
                                      d="M14.32 12.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387a8 8 0 1 1 1.414-1.414zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                            </svg>
                            <input
                                data-testid="search-input"
                                placeholder="Search"
                                type="search"
                                spellcheck="false"
                                class="appearance-none form-search w-search pl-search shadow"
                                id="jdatatable-input-search">

                        </div>
                        <div class="w-full flex items-center"><!---->
                            <div class="flex-no-shrink ml-auto mb-6">
                                <a
                                    v-bind:href="'/resources/{{SOME_DEL_LINK_TO_BE_CONFIGURED}}/new?viaResource=applications&amp;viaResourceId=' + resourceId + '&amp;viaRelationship={{CONFIGURABLE_RELATION}}'"
                                    class="btn btn-default btn-primary"
                                    dusk="create-button">
                                Create
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="relative">
                            <div class="overflow-hidden overflow-x-auto relative" style="">
                                <table id="jdatatable" cellpadding="0" cellspacing="0" data-testid="resource-table" class="table w-full table-default">
                                    <thead>
                                    <tr>
                                        <th class="w-16">&nbsp;</th>
                                        <th class="text-left">Country</th>
                                        <th class="text-left">Prop</th>
                                        <th class="text-left">Prop</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr v-for="(country, i) in countries" :key="country.id" v-bind:id="country.id">
                                        <td class="w-16" v-bind:id="country.id"></td>
                                        <td>
                                            <div class="text-left text-left" via-resource="applications"
                                                 v-bind:via-resource-id="resourceId"><span class="whitespace-no-wrap">{{country.country_name}} </span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="text-left text-left" via-resource="applications"
                                                 v-bind:via-resource-id="resourceId"><span class="whitespace-no-wrap">{{ country.prop }}</span>
                                            </div>
                                        </td>

                                        <td>
                                            <div class="text-left text-left" via-resource="applications"
                                                 v-bind:via-resource-id="resourceId"><span class="whitespace-no-wrap">{{ country.prop }}</span>
                                            </div>
                                        </td>
                                        <td class="td-fit text-right pr-6 align-middle">
                                            <div class="inline-flex items-center">
                                                <span class="inline-flex">
                                                    <a
                                                        v-bind:href="'/resources/{{SOME_DEL_LINK_TO_BE_CONFIGURED}}/' + country.id"
                                                        class="cursor-pointer text-70 hover:text-primary mr-3 inline-flex items-center has-tooltip"
                                                        v-bind:data-testid="'{{SOME_DEL_LINK_TO_BE_CONFIGURED}}-items-' + country.id + '-view-button'"
                                                        v-bind:dusk="i + '-view-button'"
                                                        data-original-title="null">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 16" aria-labelledby="view" role="presentation" class="fill-current">
                                                            <path d="M16.56 13.66a8 8 0 0 1-11.32 0L.3 8.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 0 0 8.48 0L19.38 8l-4.24-4.24a6 6 0 0 0-8.48 0L2.4 8l4.25 4.24h.01zM10.9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                                                        </svg>
                                                    </a>
                                                </span>

                                                <span class="inline-flex">
                                                    <a
                                                        v-bind:href="'/resources/{{SOME_DEL_LINK_TO_BE_CONFIGURED}}/' + country.id + '/edit?viaResource=applications&amp;viaResourceId=' + resourceId + '&amp;viaRelationship={{CONFIGURABLE_RELATION}}'"
                                                        class="inline-flex cursor-pointer text-70 hover:text-primary mr-3 has-tooltip"
                                                        v-bind:dusk="i + '-edit-button'" data-original-title="null">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                            viewBox="0 0 20 20" aria-labelledby="edit" role="presentation"
                                                            class="fill-current">
                                                        <path d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"></path>
                                                        </svg>
                                                    </a>
                                                </span>


                                                <!-- Delete Resource Link -->
                                                <button

                                                    :dusk="`${resourceId}-delete-button`"
                                                    v-bind:id="`${resourceId}-${country.id}-delete-svg`"
                                                    class="
                                                        inline-flex
                                                        appearance-none
                                                        cursor-pointer
                                                        text-70
                                                        hover:text-primary
                                                        mr-3
                                                        btn-delete
                                                      "
                                                    v-tooltip.click="Delete"
                                                >
                                                    <icon v-bind:id="`${resourceId}-${country.id}-delete-svg`" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import Vue from 'vue';
    import {DataTable} from "./../simple-datatables";
    import Swal from 'sweetalert2';

    function delFunction(id, resourceId, dt) {

        Swal.fire({
            title: 'Delete Resource',
            text: 'Are you sure you want to delete this resource?',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: 'red',
            confirmButtonText: 'Delete',
            reverseButtons: true,
            cancelButtonColor: "#F4F7FA",
            cancelButtonText: '<span style="color: #7C858E">Cancel</span>',
        }).then((result) => {

            const elId = id.split('-')[1];

            if (result.isConfirmed) {
                let uri = `/nova-api/{{SOME_DEL_LINK_TO_BE_CONFIGURED}}?search=&filters=W10%3D&trashed=&viaResource=applications&viaResourceId=${resourceId}&viaRelationship={{SOME_DEL_LINK_TO_BE_CONFIGURED}}&resources[]=${elId}`;

                axios.delete(uri, {
                }).then((result) => {
                    if (result.status === 200) {
                        Nova.$emit("tr-deleted", elId);
                    } else {
                        Swal.fire('Server error');
                    }
                });
            }
        });
    }

    export default {
        props: [
            'resourceName',
            'resourceId',
            'panel',
            'countries',
            'heading',
            'key'
        ],

        data() {
            return {
                updateKey: 0,
            };
        },

        components: {
        },

        methods: {
        },

        mounted() {
            this.countries = this.panel.fields[0].countries || [];
            this.heading = this.panel.fields[0].heading || 'Jdatatable';

            const noResults = `<div class="text-center"><br /><br />
  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="51" viewBox="0 0 65 51" class="mb-3">
    <path
      fill="#A8B9C5"
        d="M56 40h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H38v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H6c-3.313708 0-6-2.686292-6-6V6c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375C61.053323 31.5511 65 35.814652 65 41c0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM20 30h16v-8H20v8zm0 2v8h16v-8H20zm34-2v-8H38v8h16zM2 30h16v-8H2v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8H2zm18-12h16v-8H20v8zm34 0v-8H38v8h16zM2 20h16v-8H2v8zm52-10V6c0-2.209139-1.790861-4-4-4H6C3.790861 2 2 3.790861 2 6v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z">
    </path>
  </svg>
  <h3 class="text-base text-80 font-normal mb-6">
            No data matched the given criteria.
  </h3>
  <div>
    <a
      href="/resources/{{SOME_DEL_LINK_TO_BE_CONFIGURED}}/new?viaResource=applications&amp;viaResourceId=${this.resourceId}&amp;viaRelationship={{SOME_DEL_LINK_TO_BE_CONFIGURED}}"
      class="btn btn-sm btn-outline inline-flex items-center focus:outline-none focus:shadow-outline active:outline-none active:shadow-outline"
      dusk="create-button">
      Create
    </a>
  </div><br /><br />
</div>`;

            const updateForm = function (heading, resourceId) {
                const options = {
                    resourceId,
                    paging: true,
                    searchable: false,
                    scrollY: '400px',
                    footer: true,
                    labels: {
                        noRows: noResults,
                        noResults: noResults,
                        placeholder: "Search",
                    },
                };

                const myTable = document.querySelector("#jdatatable");
                const dt = new DataTable(myTable, options);


                Nova.$on('btn-delete-clicked', id => delFunction(id, resourceId) );
                Nova.$on('tr-deleted', id => dt.rows().removeTr(id) );

            };

            setTimeout(updateForm.bind(null, this.heading, this.resourceId), 1000);
        },
    }
</script>

<style>

</style>
