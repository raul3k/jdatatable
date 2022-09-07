<?php

namespace Raul3k\Jdatatable;

use Laravel\Nova\ResourceTool;

class Jdatatable extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Jdatatable';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'jdatatable';
    }

    public function heading($heading)
    {
        return $this->withMeta([
            'heading' => $heading
        ]);
    }

    public function countries($countries)
    {
        return $this->withMeta([
            'countries' => $countries,
        ]);
    }
}
