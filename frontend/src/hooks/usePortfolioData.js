import { useState, useEffect } from 'react'
import {
    experienceService,
    projectService,
    skillService,
    educationService,
} from '../services/api'

/**
 * Generic data-fetching hook.
 * Returns { data, loading, error } for a given async fetchFn.
 */
function useFetch(fetchFn) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)

        fetchFn()
            .then((result) => {
                if (!cancelled) {
                    // DRF returns { results: [...] } when pagination is on, or [] directly
                    setData(Array.isArray(result) ? result : (result.results ?? []))
                }
            })
            .catch((err) => {
                if (!cancelled) setError(err.message)
            })
            .finally(() => {
                if (!cancelled) setLoading(false)
            })

        return () => { cancelled = true }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return { data, loading, error }
}

export const useExperiences = () => useFetch(experienceService.getAll)
export const useProjects = () => useFetch(projectService.getAll)
export const useSkills = () => useFetch(skillService.getAll)
export const useEducation = () => useFetch(educationService.getAll)
