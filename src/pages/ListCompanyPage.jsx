import React, { useEffect, useState } from 'react'

export default function PostListPage() {
    const [postList, setPostList] = useState(null)

    useEffect(() => {
        const url = 'https://frebi.willandskill.eu/api/v1/customers/'
        const token = localStorage.getItem('webb21inl')
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPostList(data.results)
            })
    }, [])
    return (
        <div>
            {postList && postList.map(item => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.organisationNr}</p>
                        <p>{item.paymentTerm}</p>
                        <p>{item.phoneNumber}</p>
                        <p>{item.reference}</p>
                        <p>{item.vatNr}</p>
                        <p>{item.website}</p>
                        <p>{item.id}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}
