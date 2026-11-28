export const files = {
    "files": {
        "type": "array",
        "description": "A list of files to be created, each with a 'path' and 'purpose'",
        "items": {
            "type": "object",
            "properties": {
                "path": {
                    "type": "string",
                    "description": "The path to the file to be created or modified"
                },
                "purpose": {
                    "type": "string",
                    "description": "The purpose of the file, e.g. 'main application logic', 'data processing module', etc."
                }
            },
            "required": ["path", "purpose"],
            "additionalProperties": false
        }
    }
}

export const plan = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of app to be built"
        },
        "description": {
            "type": "string",
            "description": "A oneline description of the app to be built, e.g. 'A web application for managing personal finances'"
        },
        "techstack": {
            "type": "string",
            "description": "The tech stack to be used for the app, e.g. 'python', 'javascript', 'react', 'flask', etc."
        },
        "features": {
            "type": "array",
            "description": "A list of features that the app should have, e.g. 'user authentication', 'data visualization', etc.",
            "items": { "type": "string" }
        },
        "files": files
    },
    "required": ["name", "description", "techstack", "features", "files"],
    "additionalProperties": false
}